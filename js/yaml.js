export class Yaml {
    vue = null;

    static fromApp(vue) {
        let self = new Yaml();
        self.vue = vue;

        return self;
    }

    toYaml() {
        if (!this.vue || !this.vue.game || !this.vue.creator) return;

        let game = this.vue.game.replace(/[^A-Za-z0-9]/g, '');
        let creator = this.vue.creator.replace(/[^A-Za-z0-9]/g, '');

        const yamlContents = 
            `Manual_${game}_${creator}:\n` +
            '    progression_balancing: 50\n' +
            '    accessibility: items\n\n' +
            `game: Manual_${game}_${creator}\n` +
            `name: ${creator}`;

        const file = new Blob([yamlContents], { type: 'text/yaml' });

        saveAs(file, `Manual_${game}_${creator}.yaml`);
    }
}