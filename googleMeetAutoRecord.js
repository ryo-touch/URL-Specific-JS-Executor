(function() {
  // Configuration object
  const CONFIG = {
    selectors: {
      dialogTitle: 'ビデオ通話の録画',
      checkboxClass: 'KGC9Kd-muHVFf-bMcfAe'
    },
    indices: {
      captionsCheckbox: 0,      // "録画に字幕を含める" - DO NOT touch
      transcriptionCheckbox: 1, // "文字起こしも開始" - AUTO-CHECK
      geminiCheckbox: 2         // "Gemini によるメモ作成も開始する" - AUTO-CHECK
    },
    timings: {
      debounceDelay: 200,
      observerTimeout: 60000
    }
  };

  // State management
  let hasExecuted = false;
  let debounceTimer = null;

  // Helper: Check if recording dialog is visible
  const isRecordingDialogVisible = () => {
    const allText = document.body.textContent;
    return allText.includes(CONFIG.selectors.dialogTitle);
  };

  // Helper: Get all checkboxes in recording panel
  const getAllCheckboxes = () => {
    const checkboxes = document.querySelectorAll(`input.${CONFIG.selectors.checkboxClass}[type="checkbox"]`);
    return Array.from(checkboxes);
  };

  // Helper: Check a checkbox if not already checked
  const checkCheckbox = (checkbox, label) => {
    if (!checkbox) {
      console.warn(`[Google Meet Auto-Record] ${label} checkbox not found`);
      return false;
    }

    const isChecked = checkbox.checked;
    if (!isChecked) {
      checkbox.click();
      console.log(`[Google Meet Auto-Record] ${label} checkbox checked ✓`);
      return true;
    } else {
      console.log(`[Google Meet Auto-Record] ${label} checkbox already checked`);
      return false;
    }
  };

  // Main: Execute auto-checkbox logic
  const executeAutoCheckbox = () => {
    if (hasExecuted) {
      console.log('[Google Meet Auto-Record] Already executed, skipping');
      return;
    }

    if (!isRecordingDialogVisible()) {
      return;
    }

    console.log('[Google Meet Auto-Record] Recording dialog detected');
    hasExecuted = true;

    // Get all checkboxes
    const allCheckboxes = getAllCheckboxes();

    if (allCheckboxes.length === 0) {
      console.warn('[Google Meet Auto-Record] No checkboxes found with class: ' + CONFIG.selectors.checkboxClass);
      hasExecuted = false; // Reset to try again
      return;
    }

    console.log(`[Google Meet Auto-Record] Found ${allCheckboxes.length} checkbox(es)`);

    // Check transcription checkbox (index 1)
    if (allCheckboxes.length > CONFIG.indices.transcriptionCheckbox) {
      checkCheckbox(allCheckboxes[CONFIG.indices.transcriptionCheckbox], 'Transcription');
    } else {
      console.warn('[Google Meet Auto-Record] Transcription checkbox not found at index ' + CONFIG.indices.transcriptionCheckbox);
    }

    // Check Gemini checkbox (index 2)
    if (allCheckboxes.length > CONFIG.indices.geminiCheckbox) {
      checkCheckbox(allCheckboxes[CONFIG.indices.geminiCheckbox], 'Gemini');
    } else {
      console.warn('[Google Meet Auto-Record] Gemini checkbox not found at index ' + CONFIG.indices.geminiCheckbox);
    }

    console.log('[Google Meet Auto-Record] Auto-checkbox execution completed. You can now manually click the start recording button.');

    // Cleanup: Disconnect observer after successful execution
    observer.disconnect();
    console.log('[Google Meet Auto-Record] Observer disconnected');
  };

  // Debounced execution to avoid excessive checks
  const debouncedExecute = () => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      executeAutoCheckbox();
    }, CONFIG.timings.debounceDelay);
  };

  // MutationObserver setup
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      debouncedExecute();
    });
  });

  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
  });

  console.log('[Google Meet Auto-Record] Script initialized. Watching for recording dialog...');

  // Timeout: Disconnect after specified time if dialog never appears
  setTimeout(() => {
    if (!hasExecuted) {
      observer.disconnect();
      console.log('[Google Meet Auto-Record] Recording dialog not detected within timeout period. This may occur if you are not the meeting owner or do not have recording permissions.');
    }
  }, CONFIG.timings.observerTimeout);
})();
