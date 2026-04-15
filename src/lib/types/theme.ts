export type BrandBackgroundOverlay = {
  pattern?: {
    type: "dot-grid" | "grid-lines";
    color: string;
    size: string;
    opacity: number;
    dotRadius?: string;
  };
  gradientOverlay?: string;
};

export type BrandTheme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    surfaceAlt: string;
    border: string;
    text: string;
    textMuted: string;
    accent: string;
    success?: string;
    warning?: string;
    danger?: string;
  };

  typography: {
    fontHeading: string;
    fontBody: string;
    fontMono?: string;

    weights: {
      light: number;
      regular: number;
      medium: number;
      semibold: number;
      bold: number;
    };

    scale: {
      hero: string;
      h1: string;
      h2: string;
      h3: string;
      body: string;
      small: string;
    };

    letterSpacing: {
      tight: string;
      normal: string;
      wide: string;
    };
  };

  surfaces: {
    page: string;
    cards: string;
    buttons: string;
    inputs: string;
    sections: {
      hero: string;
      identity: string;
      process: string;
      services: string;
      final: string;
      contact: string;
    };
  };

  effects: {
    radius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    shadows: {
      soft: string;
      strong: string;
    };

    blur: {
      light: string;
      strong: string;
    };

    gradients: {
      hero: string;
      section: string;
    };

    imageTreatment: {
      style: string;
      overlay: string;
      emphasis: string;
    };

    motion: {
      style: string;
      duration: string;
      easing: string;
    };
  };

  backgroundOverlay?: BrandBackgroundOverlay;

  visualSystem?: {
    scene: {
      type:
        | "editorial-aura"
        | "structural-frame"
        | "operational-core"
        | "intelligence-network"
        | "automation-flow"
        | "technical-depth";
      shape: "circle" | "soft-square" | "square" | "hex" | "panel";
      placement: "right" | "center" | "left";
      size: "sm" | "md" | "lg";
      layerCount: 1 | 2 | 3 | 4;
      borderStyle: "none" | "subtle" | "strong";
      glow: "none" | "soft" | "medium" | "strong";
    };

    particles: {
      mode: "none" | "dust" | "field" | "network" | "flow";
      density: "none" | "low" | "medium";
      speed: "static" | "slow" | "medium";
      opacity: "low" | "medium";
    };

    grid: {
      mode: "none" | "soft" | "technical";
      opacity: "none" | "low" | "medium";
    };

    glow: {
      mode: "none" | "ambient" | "focused" | "deep";
      intensity: "low" | "medium" | "high";
    };

    atmosphere: {
      noise: "none" | "soft";
      depth: "low" | "medium" | "high";
      contrast: "soft" | "balanced" | "strong";
    };
  };
};
