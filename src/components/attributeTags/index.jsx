import React, { useState } from "react";
import { FiX } from "react-icons/fi";


const TagsInput = props => {

    const [tags, setTags] = useState(props.tags);
    const [attributeValue, setAttributeValue] = useState()
    const [nameValue, setNameValue] = useState()
    const [empty, setEmpty] = useState()

    const handleChange = (e) => {
        setAttributeValue(e.target.value)
    }
    const handleChanger = (e) => {
        setNameValue(e.target.value)
    }


    const removeTags = indexToRemove => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };

    // const addTags = event => {
    //     const value = event.target

    //     if (value !== "") {
    //         const updatedTags = [...tags, event.target.value];
    //         setTags(updatedTags);
    //         props.selectedTags(updatedTags);
    //         event.target.value = "";
    //     }
    // };

    // const addTags = event => {
    //     if (event.target.value !== "") {
    //         setTags([...tags, event.target.value]);
    //         props.selectedTags([...tags, event.target.value]);
    //         event.target.value = "";
    //     }
    // };

    const addTags = event => {
        const combine = `${attributeValue}:${nameValue}`

        if (combine !== "") {
            const updatedTags = [...tags, combine]
            setTags(updatedTags)
            props.selectedTags(updatedTags);
            event.target.value = "";
        } else(combine === ''); {
            setTags(['Add an attribute'])
        }
    };

    return (
        <div>
            <div className='w-full grid grid-cols-1 lg:grid-cols-6 gap-6 gap-y-8 justify-between'>
                <div className="sm:col-span-3">
                    <label htmlFor="" className="block text-sm font-medium leading-6 mx-2 text-white">
                        Attribute
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            placeholder='Enter attribute'
                            name=""
                            id=""
                            value={attributeValue}
                            onChange={handleChange}
                            // onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                            autoComplete="none"
                            className="block bg-bg-dark w-full rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-grey px-4 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="" className="block text-sm font-medium leading-6 mx-2 text-white">
                        Name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            placeholder='Enter name'
                            name=""
                            id=""
                            value={nameValue}
                            onChange={handleChanger}
                            // onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                            autoComplete="none"
                            className="block bg-bg-dark w-full rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-grey px-4 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>
            <div className="flex my-[20px] justify-between items-center" >
                <ul id="tags" className="flex gap-[10px] flex-wrap max-w-[800px]">
                    {tags.map((tag, index) => (
                        <li key={index} className="flex gap-[5px] items-center bg-brand2 rounded-lg p-[5px]">
                            <span className='text-white'>{tag}</span>
                            <span className='text-white'
                                onClick={() => removeTags(index)}
                            >
                                <FiX />
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="rounded-md bg-brand1 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand2" onClick={(e) => addTags(e)}>Add trait</div>
            </div>

        </div>
    );
};

const Taggs = () => {
    const selectedTags = tags => {
        console.log('helo', tags);
    };
    return (
        <div className="App">
            <TagsInput selectedTags={selectedTags} tags={[]} />
        </div>
    );
};

export default Taggs