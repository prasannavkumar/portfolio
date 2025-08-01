const tabs = document.querySelectorAll('.project-category');
const panels = document.querySelectorAll('.spotlight');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.id.replace('-tab', ''); // e.g., 'academic-tab' → 'academic'

    // Update tab active state
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Show matching panel
    panels.forEach(panel => {
      panel.classList.toggle('active', panel.id === tabId);
    });
  });
});