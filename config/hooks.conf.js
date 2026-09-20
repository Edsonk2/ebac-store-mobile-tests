export let hooksConf = {
    beforeTest: async function() {
        console.log("=== BEFORE TEST ===");
        console.log("Iniciando teste...");
    },

    afterTest: async function() {
        console.log("=== AFTER TEST ===");
    }
}
