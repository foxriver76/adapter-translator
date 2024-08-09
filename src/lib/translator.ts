import '@iobroker/types';

interface TranslatorOptions {
    /** The adapter instance */
    adapter: ioBroker.Adapter;
    /** The config i18n directories */
    configDirs: string[];
}

/**
 * The translator class helps you to manage translations from one or multiple i18n directories
 * Each directory should contain a json file for every supported language. The file needs to have the languages name.
 *
 * ```ts
 * const translator = new Translator({ adapter: this, configDirs: [path.join(__dirname, 'i18n')]);
 * await translator.ready();
 * translator.translate('Hello world');
 * ```
 */
export class Translator {
    /** The adapter to use */
    private adapter: ioBroker.Adapter;
    /** The config i18n directories */
    private configDirs: string[];
    /** Await the promise to ensure the translator is ready */
    private ready: Promise<void>;

    constructor(options: TranslatorOptions) {
        this.adapter = options.adapter;
        this.configDirs = options.configDirs;

        this.ready = this.init();
    }

    /**
     * Initialize the Translator instance
     * This determines the locale and loads the translations from the config file
     */
    private async init(): Promise<void> {}

    /**
     * Translate given key to the active language (configured in `system.config` object)
     * @param key
     */
    public translate(key: string): string {
        // TODO
        return 'TODO';
    }
}
