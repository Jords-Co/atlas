import { skipToMainContent } from "$digerati/skipToMainContent";
import { currentYear } from "$digerati/currentYear";
import { scheduleACall } from "$atlas/scheduleACall";
import { pseudoGroupInsightsByMonth } from "$atlas/pseudoGroupInsightsByMonth";

window.Webflow || [];
window.Webflow.push(() => {
  skipToMainContent();
  currentYear();
  scheduleACall();
  pseudoGroupInsightsByMonth();
});