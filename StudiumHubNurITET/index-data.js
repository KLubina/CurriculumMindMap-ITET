// Provides study programs as a reusable class to avoid duplication and centralize data.
(function (global) {
  class StudiesData {
    static getPrograms() {
      // Only keep the eth-itet program as requested.
      return [
        {
          key: "eth-itet",
          title: "BSc ITET",
          subtitle: "ETH Zürich",
          featured: true,
        },
      ];
    }
  }

  // Expose to global scope
  global.StudiesData = StudiesData;
})(window);
