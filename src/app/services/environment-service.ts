export const isDevEnvironment = (): boolean => {
    return process.env.REACT_APP_ENVIRONMENT === 'dev';
}