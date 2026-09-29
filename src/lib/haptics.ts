export type HapticFeedbackType = "light" | "medium" | "heavy" | "open" | "close" | "selection";

let lastHapticTime = 0;

export function triggerHaptic(type: HapticFeedbackType | number | number[] = "light"): void {
  if (typeof window === "undefined" || !("vibrate" in navigator)) {
    return;
  }

  const now = Date.now();
  // Prevent duplicate double vibrations from rapid pointerdown + click on mobile
  if (now - lastHapticTime < 60) {
    return;
  }
  lastHapticTime = now;

  try {
    if (typeof type === "number" || Array.isArray(type)) {
      navigator.vibrate(type);
      return;
    }

    switch (type) {
      case "light":
      case "selection":
        navigator.vibrate(10);
        break;
      case "medium":
        navigator.vibrate(22);
        break;
      case "heavy":
        navigator.vibrate(35);
        break;
      case "open":
        // Crisp double-pulse haptic for opening cards/modals
        navigator.vibrate([12, 35, 18]);
        break;
      case "close":
        // Subtle single release tick
        navigator.vibrate(8);
        break;
      default:
        navigator.vibrate(10);
    }
  } catch {
    // Gracefully ignore on platforms without vibration support (e.g., iOS Safari)
  }
}
