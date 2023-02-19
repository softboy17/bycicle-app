import React, {useState} from 'react';
import bycicle from './assets/bycicle.svg';
import ocean from './assets/ocean.svg';
import back from './assets/background.svg';
import Modal from "./components/Modal/Modal";

function App() {
    const green = '#06d6a0';
    const [updateBack, setUpdateBack] = useState('');
    const backgrounds = [ocean, back, green];
    const [isModal, setIsModal] = useState(true);

    console.log(isModal);
    // console.log(backgrounds);
    // console.log('updated', updateBack);

    return (
        <div>
            <div
                onClick={() => setIsModal(!isModal)}
                style={{
                    background: `${updateBack.includes('/') ? `url(${updateBack}) no-repeat` : updateBack}`,
                    transition: 'background 0.5s ease-in-out'
                }}>
                <div>
                    <img style={{width: '450px', height: '250px'}} src={bycicle} alt="bycicle"/>
                </div>
            </div>
            <Modal isOpen={isModal} onClose={() => setIsModal(!isModal)}>
                <div style={{display: 'flex'}}>
                    {
                        backgrounds.map(item => {
                            console.log(item.includes('/'));
                            return (
                                <div>
                                    {
                                        item.includes('/') ?
                                            <img onClick={() => setUpdateBack(item)}
                                                 style={{width: '250px', height: '100px', background: item}} src={item}
                                                 alt="back"/>
                                            :
                                            <div onClick={() => setUpdateBack(item)}
                                                 style={{width: '250px', height: '100px', backgroundColor: item}}></div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </Modal>
        </div>
    );
}

export default App;