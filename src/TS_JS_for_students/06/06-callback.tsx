import React, {ChangeEvent, MouseEvent} from "react";

/*const callback = () => {
    alert('hey')
};
window.setTimeout(callback, 1000)*/


export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        debugger
        alert("user have been deleted")
        console.log(e.currentTarget.name)
    }


    /*    const saveUser = () => {
            alert("user have been saved")
        }*/

    const onNameChanged = () => {
        console.log("name changed")
    }

    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed: " + e.currentTarget.value)
    }

    const focusLostHandler = () => {
        console.log("focus lost")
    }

    const search = () => {
        console.log("search")
    }

    return <div>
        <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name="search" tabIndex={0} onClick={search}>search</button>
        <div>
            <button name="delete" tabIndex={1} onClick={deleteUser}>x</button>
            {/*  <button name="save" tabIndex={0} onClick={deleteUser}>x</button>*/}
        </div>
    </div>
}