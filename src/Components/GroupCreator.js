import { useEffect, useRef, useState } from 'react'
import "./GroupCreator.css"


function GroupCreator() {
    const refOne = useRef('null');

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick, true)
    }, [])

    const handleOutsideClick = (e) => {
        if (!refOne.current.contains(e.target)) {
            refOne.current.style.display = "none"
        }
    }

    const [groupData, setgroupData] = useState({ groupName: "", color: "" })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setgroupData({ ...groupData, [name]: value })
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(groupData)
    }

    return (
        <form onSubmit={handleSumbit} ref={refOne} className="group-container">
            <h3>Create New Notes group</h3>
            <label htmlFor="groupName" className="groupName">Group Name</label>
            <input type="text" id="groupName" name="groupName" placeholder="Enter your group name..." value={groupData.groupName} onChange={handleChange} /><br></br>
            <label htmlFor="color" className="choose-color">Choose Colour</label>
            <input type="radio" name="color" value="rgba(179, 139, 250, 1)" onChange={handleChange} />
            <input type="radio" name="color" value="rgba(255, 121, 242, 1)" onChange={handleChange} />
            <input type="radio" name="color" value="rgba(67, 230, 252, 1)" onChange={handleChange} />
            <input type="radio" name="color" value="rgba(241, 149, 118, 1)" onChange={handleChange} />
            <input type="radio" name="color" value="rgba(0, 71, 255, 1)" onChange={handleChange} />
            <input type="radio" name="color" value="rgba(102, 145, 255, 1)" onChange={handleChange} />
            <button type="sumbit">Create</button>
        </form>
    )
}


export default GroupCreator