"use client"
import "./degreePlanner.css";
import { useEffect, useState } from "react";
import { Planner } from "./planner";

function DegreePlanner() {
    const [shouldShowNextPage, setShouldShowNextPage] = useState(false);
    const [degreeStartYears, setDegreeStartYears] = useState([]);

    
    useEffect(() => {
        const currYear = new Date().getFullYear();
        let validDegreeStartYears = [];
        let lowerBoundYear = currYear - 5;
        let upperBoundYear = currYear + 1;

        for (let year=lowerBoundYear; year < upperBoundYear; year++) {
            validDegreeStartYears.push(year);
        }

        setDegreeStartYears(validDegreeStartYears);
    }, []);

    return (
        <>
            {shouldShowNextPage ? <Planner /> :
            <form className="detailsContainer" id="detailsContainer" onSubmit={() => setShouldShowNextPage(true)}>
                <h2 className="pageHeader">Let&apos;s Get Started!</h2>
                <div className="detailsForm">
                    <div className="formElement">
                        <label className="degreeLabel" htmlFor="degree">Degree</label>
                        <select id="degree" className="degreeSelect" required>
                            <option value="" disabled selected>Select degree</option>
                            <option value="1">Bachelor of Science</option>
                            <option value="2">Bachelor of Advanced Computing</option>
                            <option value="3">Bachelor of Interaction Design/Bachelor of Advanced Studies</option>
                        </select>
                    </div>
                    <div className="formElement">
                        <label className="degreeLabel" htmlFor="firstMajor">Degree year</label>
                        <div className="degreeDateGroup">
                            {/* <input type="text" placeholder="Start year" className="degreeDateInput" htmlFor="degreeStart" 
                                min="2017"
                                max="2026"
                                onFocus={(ctx) => (ctx.target.type='number')}
                                onBlur={(ctx) => (ctx.target.type='text')}
                            /> */}
                            <select id="degreeStart" className="degreeSelect" required>
                                <option value="" disabled selected>Select start year</option>
                                {
                                    degreeStartYears.map((validYearOption, idxInValidYears) => {
                                        return (
                                            <option 
                                                key={validYearOption} 
                                                value={idxInValidYears}
                                            >
                                                {validYearOption}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="formElement">
                        <label className="degreeLabel" htmlFor="firstMajor">Major</label>
                        <select id="firstMajor" className="degreeSelect" required>
                            <option value="" disabled selected>Select major</option>
                            <option value="1">Computer Science</option>
                            <option value="2">Data Science</option>
                            <option value="3">Development</option>
                        </select>
                    </div>
                    <div className="formElement">
                        <label className="degreeLabel" htmlFor="secondMajor">Second major (if applicable)</label>
                        <select id="secondMajor" className="degreeSelect" defaultValue="4" required>
                            <option value="" disabled selected>Select major</option>
                            <option value="1">Computer Science</option>
                            <option value="2">Data Science</option>
                            <option value="3">Software Development</option>
                            <option value="4">NA</option>
                        </select>
                    </div>
                    <div className="formElement">
                        <label className="degreeLabel" htmlFor="minor">Minor (if applicable)</label>
                        <select id="minor" className="degreeSelect" defaultValue="4" required>
                            <option value="" disabled selected>Select minor</option>
                            <option value="1">Mathematics</option>
                            <option value="2">Computer Science</option>
                            <option value="3">Design</option>
                            <option value="4">NA</option>
                        </select>
                    </div>
                    <div className="formElement">
                        <button className="submitButton" type="submit">START PLANNING</button>
                    </div>
                </div>
            </form>
            }
        </>
    )
}

export default DegreePlanner;
