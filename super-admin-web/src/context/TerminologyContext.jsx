import React, { createContext, useContext, useState } from 'react';

const TerminologyContext = createContext();

export const TerminologyProvider = ({ children }) => {
    const [institutionType, setInstitutionType] = useState('School'); // 'School' or 'Coaching'

    const terms = institutionType === 'School'
        ? { class: 'Class', student: 'Student', teacher: 'Teacher', section: 'Section' }
        : { class: 'Batch', student: 'Aspirant', teacher: 'Faculty', section: 'Slot' };

    return (
        <TerminologyContext.Provider value={{ institutionType, setInstitutionType, terms }}>
            {children}
        </TerminologyContext.Provider>
    );
};

export const useTerminology = () => useContext(TerminologyContext);