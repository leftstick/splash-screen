/**
 * splash-screen is very simple to use to setup a splash-screen for your
 * application
 *
 * @author Howard.Zuo
 * @date   May 11th, 2016
 *
 **/
export interface SplashStatic {
    enable(theme: string): void;
    isRunning(): boolean;
    destroy(): void;
    version: string;
}
declare let Splash: SplashStatic;
export { Splash };
