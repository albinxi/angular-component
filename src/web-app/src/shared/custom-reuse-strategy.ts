import {
  RouteReuseStrategy,
  ActivatedRouteSnapshot,
  DetachedRouteHandle
} from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {
  private readonly handlers: { [key: string]: DetachedRouteHandle } = {};

  /**
   * Determines if this route (and its subtree) should be detached to be reused later
   * @param route
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (!route.routeConfig || route.routeConfig.loadChildren) {
      return false;
    }

    let shouldReuse = false;
    if (route.routeConfig.data && route.routeConfig.data.reuse) {
      shouldReuse = route.routeConfig.data.reuse;
    }

    return shouldReuse;
  }

  /**
   * Stores the detached route.
   */
  store(route: ActivatedRouteSnapshot, handler: DetachedRouteHandle): void {
    if (handler) {
      this.handlers[this.getUrl(route)] = handler;
    }
  }

  /**
   * Determines if this route (and its subtree) should be reattached
   * @param route Stores the detached route.
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this.handlers[this.getUrl(route)];
  }

  /**
   * Retrieves the previously stored route
   */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig || route.routeConfig.loadChildren) {
      return null;
    }

    return this.handlers[this.getUrl(route)];
  }

  /**
   * Determines if a route should be reused
   * @param future
   * @param current
   */
  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    current: ActivatedRouteSnapshot
  ): boolean {
    // We only want to reuse the route if the data of the route config does not contain a reuse false boolean
    let reUseUrl = true;

    if (future.routeConfig && future.routeConfig.data) {
      reUseUrl = future.routeConfig.data.reuse;
    }

    /**
     * Default reuse strategy by angular assers based on the following condition
     * @see https://github.com/angular/angular/blob/4.4.6/packages/router/src/route_reuse_strategy.ts#L67
     */
    const defaultReuse = future.routeConfig === current.routeConfig;

    // If both our reuseUrl and default Url are true, we want to reuse the route
    const shouldReuse = reUseUrl && defaultReuse;
    return shouldReuse;
  }

  /**
   * Returns a url for the current route
   * @param route
   */
  getUrl(route: ActivatedRouteSnapshot): string {
    // The url we are going to return
    if (route.routeConfig) {
      const url = route.routeConfig.path;

      return url;
    }
  }
}
