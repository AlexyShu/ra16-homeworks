import {useState} from "react";

function PhotoManager() {
    const [dataUrls, setDataUrls] = useState([]);

    const fileToDataUrl = file => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.addEventListener('load', evt => {
                resolve(evt.currentTarget.result);
            });

            fileReader.addEventListener('error', evt => {
                reject(new Error(evt.currentTarget.error));
            });

            fileReader.readAsDataURL(file);
        });
    }

    const handleSelect = async (evt) => {
        const files = [...evt.target.files];
        console.log(files)
        const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
        console.log(urls)
        // У вас в массиве - dataUrl, можете использовать в качестве значения атрибута src тега img
    }

    return (
        <div className="photoManager">
            {/*<div className="selectField">Click to select</div>*/}
            <input type="file" className="fileField" onChange={(event)=> { handleSelect(event) }} />
        </div>
    )
}

export default PhotoManager;