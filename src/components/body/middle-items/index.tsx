import { FC } from "react";
import "./styles.css";
import MiddleItemsStatic from "./middle-items-static";
import MiddleItemsDynamic from "./middle-items-dynamic";

let MiddleItems: FC = () => {
    return (
        <div className="middleItems text-center">
            <div className="row items-img">
                <div className="col">
                    <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    <p>Examples</p>
                </div>
                <div className="col">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="1.5em" width="1.5em" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>
                    <p>Capabilities</p>
                </div>
                <div className="col">
                    <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-6 w-6" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    <p>Limitations</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <MiddleItemsDynamic data="Search for 'Skills' to visit skills page" />
                </div>
                <div className="col">
                <MiddleItemsStatic data="Always stays up to date with the new Technology." />
                </div>
                <div className="col">
                <MiddleItemsStatic data="Can't always learn all new Technology!" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <MiddleItemsDynamic data="Search for 'Project' to visit project page" />
                </div>
                <div className="col">
                <MiddleItemsStatic data="Gives more then expected results to his Clients." />
                </div>
                <div className="col">
                <MiddleItemsStatic data="Low on some communictaion skills." />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <MiddleItemsDynamic data="Search for 'Blogs' to visit blogs page" />
                </div>
                <div className="col">
                <MiddleItemsStatic data="My approach is to optimise and solve problems." />
                </div>
                <div className="col">
                <MiddleItemsStatic data="Sometime couldn't give maximum efforts." />
                </div>
            </div>
        </div>

    )
}
export default MiddleItems;