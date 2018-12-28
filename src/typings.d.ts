/* SystemJS module definition */
/// <reference types="webpack-env" />
declare var module: NodeModule;
interface NodeModule {
  id: string;
  hot: any
}
