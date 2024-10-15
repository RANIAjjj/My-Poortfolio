

export const themeMiddelware = (store)=>(next)=>(action)=>{
    if(action.type === 'theme/toggleTheme'){
        const nextMode = store.getState().theme.mode ==='light'? 'dark' :'light'
        localStorage.setItem('theme',nextMode)
    }
    return next(action)
}