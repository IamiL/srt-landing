import React, {createContext, useContext, useEffect, useState} from 'react';

const TimerContext = createContext();

export const TimerProvider = ({children}) => {
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        // Запускаем таймер на 5 секунд при инициализации
        const timer = setTimeout(() => {
            setIsActive(false);
        }, 5000);

        // Очищаем таймер при размонтировании компонента
        return () => clearTimeout(timer);
    }, []);

    const value = {
        isActive
    };

    return (
            <TimerContext.Provider value={value}>
                {children}
            </TimerContext.Provider>
    );
};

export const useTimer = () => {
    const context = useContext(TimerContext);

    if (!context) {
        throw new Error('useTimer должен использоваться внутри TimerProvider');
    }

    return context;
};