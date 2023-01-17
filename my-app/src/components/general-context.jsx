import React, { useContext, useState , useEffect } from "react"
export const GeneralContext = React.createContext()
export const useGeneral = () => useContext(GeneralContext)

const GeneralProvider = ({ children }) => {
  const [en, setEn] = useState("en") //can be en and fa
  const [theme, setTheme] = useState("light") // can be dark and light
  const [login, setLogin] = useState(false) // can be dark and light
  const [selectedUnit, setSelectedUnit] = useState("DMS") //DM, UTM, DMS
  const [selectedVelocity, setSelectedVelocity] = useState("ms") //ms , kh
  const [selectedAcc, setSelectedAcc] = useState("ms2") //ms2, g
  const [selectedDistance, setSelectedDistance] = useState("m") //m, kh
  const valueObject = {
    en,
    setEn,
    theme,
    setTheme,
    login,
    setLogin,
    selectedUnit,
    setSelectedUnit,
    selectedVelocity,
    setSelectedVelocity,
    selectedAcc,
    setSelectedAcc,
    selectedDistance,
    setSelectedDistance
  }

  const checkValueTheme = () => {
    let theme = localStorage.getItem('theme');
        if(theme){
        document.documentElement.setAttribute("data-theme", theme);
        setTheme(theme)
    }else{ // default
        let defaultTheme = 'dark'
        document.documentElement.setAttribute("data-theme", defaultTheme);
        setTheme(defaultTheme)
    }
  }

  const checkValueLang = () => {
    let lang = localStorage.getItem('lang');
    if(lang){
        setEn(lang)
    }else{ // default
        let defaultLang = 'en'
        setEn(defaultLang)
    }
  }


  const checkValueLogin = () => {
    let token = localStorage.getItem('token');
      if(token){
          setLogin(true)
      }else{ // default
          setEn(false)
      }
  }

  useEffect(() => {
    checkValueLogin()
    checkValueTheme()
    checkValueLang()
  }, [])

  return (
    <GeneralContext.Provider value={valueObject}>
      {children}
    </GeneralContext.Provider>
  )
}

export default GeneralProvider
