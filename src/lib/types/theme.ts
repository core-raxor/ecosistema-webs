import type { ParamObjectConfig, SceneShape, SceneType } from "./scene";

export type { SceneShape, SceneType };

export type BrandTheme = {
  colors: {
    accent: string;
  };
  scene?: {
    type: SceneType;
    shape?: SceneShape;
    objectConfig?: Partial<ParamObjectConfig>;
  };
};
