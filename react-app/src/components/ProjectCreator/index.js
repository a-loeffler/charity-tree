import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Redirect, useHistory} from 'react-router-dom';
import TierButton from './TierButton';
import MediaTile from './MediaTile';
import MediaUpload from '../MediaUpload';
import RedirectModal from '../RedirectModal';
import { postNewProject } from '../../store/project';
import { getAllProjects } from '../../store/allProjects';
import { resetTempMedia } from '../../store/media';

import { deleteTempMedia, postProjectMedia } from '../../store/media';


import './index.css'


const ProjectCreator = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const mockMedia = ["https://i.ibb.co/7CCsBs7/mock-tile.png", "https://i.ibb.co/7CCsBs7/mock-tile.png"]


    const currentDate = new Date()
    const dd = String(currentDate.getDate()).padStart(2, '0');
    const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
    const yyyy = currentDate.getFullYear();

    const today = `${yyyy}-${mm}-${dd}`;

    const tempMedia = useSelector(state => state.MediaList.temp_media)
    const projectInfo = useSelector(state => state.project.projectInfo)
    const owner = useSelector(state => state.session.user)
    const categories = useSelector(state => state.allCategories.categories);


    const [section, setSection] = useState(1);
    const [category, setCategory] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [goal, setGoal] = useState(0);
    const [deadline, setDeadline] = useState(today);
    const [tiers, setTiers] = useState([]);
    const [tierEditorOpen, setTierEditorOpen] = useState(false);
    const [tempTierName, setTempTierName] = useState("");
    const [tempTierValue, setTempTierValue] = useState(0);
    const [tempTierDescription, setTempTierDescription] = useState("");
    const [readyForNewMedia, setReadyForNewMedia] = useState(true)

    const [projectId, setProjectId] = useState(0)



    useEffect(() => {

        if (projectInfo.project) {
            setProjectId(projectInfo.project.id)
        }

        const deleteTierButtons = document.querySelectorAll(".tier-button-cancel-button")
        if (deleteTierButtons) {
            deleteTierButtons.forEach(button => {
                button.addEventListener("click", (e) => {
                    e.preventDefault()
                    let targetId = e.target.id;
                    let process1 = targetId.split("-");
                    let indexNumber = process1[process1.length - 1];
                    let newTiers = tiers.slice();
                    newTiers.splice(indexNumber, 1);
                    setTiers(newTiers);
                })
            })
        }


        const deleteMediaButtons = document.querySelectorAll(".media-delete-button")
        if (deleteMediaButtons) {
            deleteMediaButtons.forEach(button => {
                button.addEventListener("click", (e) => {
                    e.preventDefault()
                    let targetId = e.target.id;
                    let process1 = targetId.split("-");
                    let indexNumber = process1[process1.length - 1];

                    dispatch(deleteTempMedia(indexNumber))
                    // let newMedia = media.slice();
                    // newMedia.splice(indexNumber, 1);
                    // setMedia(newMedia);
                })
            })
        }

        const mediaSubmitButton = document.querySelector(".media-submit-button")
        if (mediaSubmitButton) {
            mediaSubmitButton.addEventListener("click", (e) => {
                e.target.classList.add("blueshift")

                setTimeout(() => {
                    setSection(6)
                    e.target.classList.remove("blueshift")
                    setReadyForNewMedia(false)
                }, 4000)


            })
        }

    }, [tiers, owner, section])

    //TO-DO: get owner id from auth; otherwise redirect to sign-in page





    if (!owner) {
        return (
            <>
                <RedirectModal />
            </>
        )
    }

    // setOwnerId(owner.id)


    //To do: need to get categories from store


    const sectionForward = (e) => {
        e.preventDefault();
        e.target.classList.add("blackshift")

        setTimeout(() => {
            setSection(section + 1)
        }, 1500)

    }


    const createAndForward = async (e) => {
        e.preventDefault();
        e.target.classList.add("blackshift")

        const projectData = {
            name: name,
            description: description,
            goal: goal,
            deadline: deadline,
            owner_id: owner.id,
            category_id: category,
        }

        const data = dispatch(postNewProject(projectData, tiers))

        setTimeout(() => {

            setSection(section + 1)
        }, 1500)

    }

    const addNewTier = (e) => {
        e.preventDefault();
        setTierEditorOpen(true);

    }

    const setNewTier = (e) => {
        e.preventDefault();
        let newTier = {
            name: tempTierName,
            value: tempTierValue,
            description: tempTierDescription,
        }

        e.target.classList.add("blackshift")

        setTimeout(() => {
            setTempTierDescription("");
            setTempTierName("");
            setTempTierValue(0);
            setTierEditorOpen(false);
            setTiers(tiers.concat([newTier]))
        }, 1500)
    }


    const goToLast = (e) => {
        e.preventDefault();
        e.target.classList.add("blackshift")

        setTimeout(() => {
            setSection(7)
        }, 1500)

        //to do: dispatch thunk with mediaUrls and project id

    }

    const mediaSubmit = (e) => {
        e.preventDefault();
        e.target.classList.add("blackshift");
        dispatch(postProjectMedia(tempMedia, projectId))
        setTimeout(() => {
            dispatch(getAllProjects())
            dispatch(resetTempMedia())
        }, 500)

        setTimeout(() => {
            history.push(`/projects/${projectId}/edit`)
        }, 1000)
    }


    const addMoreMedia = (e) => {
        e.preventDefault();
        setSection(5);
        setReadyForNewMedia(true);
    }



    return (
        <div className="project-creator-container">
            <form className="project-creator-form">
                <div className={`${section === 1 ? "visible-section" : "hidden-section"}`}>
                    <div className="project-creator-form-section" id="project-creator-form-section-1">
                        <h2 className="project-creator-form-text">Let's get started...</h2>
                        <h3 className="project-creator-form-sub-text">Choose a category for your project from the list below:</h3>
                        <select className="project-creator-dropdown" placeholder="Choose a category..." value={category} onChange={e => setCategory(e.target.value)}>
                            <option>Select:</option>
                            {categories.map((category, index) => <option value={category.id} key={index}>{category.name}</option>)}
                        </select>
                        <div className="project-creator-button-container">
                            <button className={`${category ? "project-creator-next-button" : "disabled"}`} disabled={!category} onClick={e => sectionForward(e)} >Next</button>
                        </div>
                    </div>
                </div>
                <div className={`${section === 2 ? "visible-section" : "hidden-section"}`}>
                    <div className="project-creator-form-section" id="project-creator-form-section-2">
                        <h2 className="project-creator-form-text">What's your project called?</h2>
                        <h3 className="project-creator-form-sub-text">Write a clear, brief title that helps people quickly understand the gist of your project.</h3>
                        <input className="project-creator-input" type="text" placeholder="Project Name" onChange={e => setName(e.target.value)}></input>
                        <h2 className="project-creator-form-text">Describe your project in a few sentences below:</h2>
                        <h3 className="project-creator-form-sub-text">Be sure to make it short and sweet and easy to understand</h3>
                        <textarea className="project-creator-description" placeholder="Project description..." onChange={e => setDescription(e.target.value)}></textarea>
                        <div className="project-creator-button-container">
                            <button className={`${name && description ? "project-creator-next-button" : "disabled"}`} disabled={!(name && description)} onClick={e => sectionForward(e)} >Next</button>
                        </div>
                    </div>
                </div>
                <div className={`${section === 3 ? "visible-section" : "hidden-section"}`}>
                    <div className="project-creator-form-section" id="project-creator-form-section-3">
                        <h2 className="project-creator-form-text">Tell us some information about your project...</h2>
                        <h3 className="project-creator-form-sub-text">What goal are you trying to reach?</h3>
                        <span className="project-creator-form-label">$</span><input className="project-creator-input" type="number" min="10.00" step="10.00" placeholder="Goal..." onChange={e => setGoal(e.target.value)}></input>
                        <h3 className="project-creator-form-sub-text">When were you hoping to reach your goal?</h3>
                        <input className="project-creator-input" type="date" min={today} placeholder={today} onChange={e => setDeadline(e.target.value)}></input>
                        <div className="project-creator-button-container">
                            <button className={`${goal && deadline ? "project-creator-next-button" : "disabled"}`} disabled={!(goal && deadline)} onClick={e => sectionForward(e)} >Next</button>
                        </div>
                    </div>
                </div>
                <div className={`${section === 4 ? "visible-section" : "hidden-section"}`}>
                    <div className="project-creator-form-section" id="project-creator-form-section-4">
                        <h2 className="project-creator-form-text">Add your rewards</h2>
                        <h3 className="project-creator-form-sub-text">Offer simple, meaningful ways to bring backers closer to your project and celebrate it coming to life.</h3>
                        <div className={`${tiers ? "project-creator-form-tier-container" : "hidden-section"}`}>
                            {tiers.map((tier, index) => <TierButton key={index} tierInfo={tier} index={index} />)}
                        </div>
                        <div className="tier-creator-container">
                            <form className={`${!tierEditorOpen ? "hidden-section": "tier-create-form"}`}>
                                <p className="tier-create-item">
                                    <label className="project-creator-form-label" htmlFor="tierNameField">Name: </label>
                                    <div className="tier-create-field-container">
                                        <input className="tier-creator-input" type="text" id="tierNameField" value={tempTierName} onChange={e => setTempTierName(e.target.value)}></input>
                                    </div>
                                </p>
                                <p className="tier-create-item">
                                    <label className="project-creator-form-label" htmlFor="tierValueField">Value: </label>
                                    <div className="tier-create-field-container">
                                        <input className="tier-creator-input" type="number" id="tierValueField" min="10.00" step="10.00" value={tempTierValue} onChange={e => setTempTierValue(e.target.value)}></input>
                                    </div>
                                </p>
                                <p className="tier-create-item">
                                    <label className="project-creator-form-label" htmlFor="tierDescriptionField">Description: </label>
                                    <div className="tier-create-field-container">
                                        <textarea className="tier-creator-description" id="tierDescriptionField" value={tempTierDescription} onChange={e => setTempTierDescription(e.target.value)}></textarea>
                                    </div>
                                </p>
                                <div className="project-creator-button-container bottom-space">
                                    <button className={`${tempTierName && tempTierValue && tempTierDescription ? "project-creator-next-button bottom-space" : "disabled bottom-space"}`} disabled={!(tempTierName && tempTierValue && tempTierDescription)} onClick={e => setNewTier(e)} >Next</button>
                                </div>
                            </form>
                            <button className={`${tierEditorOpen ? "hidden-section": "tier-create-button"}`} onClick={e => addNewTier(e)}>+ Add a new tier</button>
                        </div>
                        <div className="project-creator-button-container">
                            <button className={`${tiers ? "project-creator-next-button" : "disabled"}`} disabled={!(tiers)} onClick={e => createAndForward(e)} >Next</button>
                        </div>
                    </div>
                </div>
                <div className={`${section === 5 ? "visible-section" : "hidden-section"}`}>
                    <div className="project-creator-form-section" id="project-creator-form-section-5">
                        <div className="media-upload-display">
                            {tempMedia.map((url, index) => <MediaTile url={url} key={index} index={index}/>)}
                        </div>
                        <h2 className="project-creator-form-text">Upload media for your project</h2>
                        <h3 className="project-creator-form-sub-text">Supports video and image uploads</h3>
                        {readyForNewMedia && <MediaUpload />}
                        <div className="project-creator-button-container">
                            <button className="project-creator-next-button max-content-width" onClick={e => goToLast(e)} >Finished Adding Media</button>
                        </div>
                    </div>
                </div>
                <div className={`${section === 6 ? "visible-section" : "hidden-section"}`}>
                    <div className="project-creator-form-section" id="project-creator-form-section-6">
                    <div className="media-upload-display">
                        {tempMedia.map((url, index) => <MediaTile url={url} key={index} index={index}/>)}
                    </div>
                    <div className="project-creator-button-container">
                        <button className="media-addmore-button max-content-width" onClick={e => addMoreMedia(e)} >+ Add Additional Media</button>
                    </div>
                    </div>
                </div>
                <div className={`${section === 7 ? "visible-section" : "hidden-section"}`}>
                    <div className="project-creator-form-section" id="project-creator-form-section-7">
                        <h2 className="project-creator-form-text">Congrats!  You're all ready to finish creating your project</h2>
                        <h3 className="project-creator-form-sub-text">Don't worry, you can go back and edit details on it later</h3>
                        <button className="project-creator-next-button max-content-width" disabled={!(tiers)} onClick={e => mediaSubmit(e)} >Create Project</button>
                    </div>
                </div>
            </form>
        </div>
    )



}

export default ProjectCreator;
