import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MdOutlineBrightnessMedium } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Home, Projects, Proviso, Blog, Calendar, Education, Professional, Personal, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css'

const App = () => {
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
                    <TooltipComponent content='Themes' position='Top' openDelay={1000} closeDelay={1000}>
                        <button 
                            type='button' 
                            className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' 
                            onClick={() => setThemeSettings(true)}
                            style={{ background: currentColor, borderRadius: '50%' }}>
                            <MdOutlineBrightnessMedium />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar />
                    </div>
                ) : (
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        <Sidebar />
                    </div>
                )}
                <div className={
                    `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full overflow-hidden
                    ${ activeMenu 
                        ? 'md:ml-72' 
                        : 'flex-2' }
                    `
                }>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <Navbar />
                    </div>


                <div>
                    {themeSettings && <ThemeSettings />}

                    <Routes>
                    {/* Main  */}
                    <Route path="/" element={(<Home />)} />
                    <Route path="/home" element={(<Home />)} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/professional" element={<Professional />} />
                    <Route path="/personal" element={<Personal />} />

                    {/* Apps  */}

                    {/* Bellevue University Main  */}

                    {/* Bellevue University Projects Pages  */}
                    <Route path="/proviso" element={<Proviso />} />
                    
                    {/* Personal Projects Main  */}

                    {/* Personal Projects Pages */}

                    {/* E36 Main  */}

                    {/* E36 Pages  */}

                    {/* @Syncfusion Practice  */}
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/editor" element={<Editor />} />

                    </Routes>

                </div>
            </div>
        </div>
        </BrowserRouter>
    </div>
  )
}

export default App