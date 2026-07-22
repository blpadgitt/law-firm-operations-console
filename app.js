const quickActions = document.querySelectorAll(".quick-actions button");
const message = document.querySelector(".message p");

const responses = {
  "Draft deficiency letter":
    "Draft queued: RFP deficiency letter with missing photos, unproduced witness texts, and source-document placeholders for attorney review.",
  "Build med chronology":
    "Chronology queued: treatment dates, providers, imaging, recommendations, gaps, and missing billing records will be separated for review.",
  "Create depo outline":
    "Outline queued: liability admissions, prior statements, treatment gaps, impeachment points, and exhibit prompts will be grouped by topic."
};

quickActions.forEach((button) => {
  button.addEventListener("click", () => {
    message.textContent = responses[button.textContent.trim()];
  });
});
