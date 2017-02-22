export class Router {
  private routes: string[];
  
  constructor() {
    this.routes = [];
  }
  
  public registerRoute(route: string): void {
    
  }
  
  public getRoutes(): string[] {
    return this.routes;
  }
}
