import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
    const navigate = useNavigate();

    const returnHome = () => {
        navigate('/');
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ maxHeight: '100vh', marginTop: '20px' }}>
            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src="./images/tick.png" alt="" width={72} height={57} />
                <h2 className="text-2xl mb-2 px-5" style={{ fontWeight: 'bold', maxWidth: '600px', margin: '0 auto' }}>
                    Your Request for a Proposal Has Been Submitted!
                </h2>
                <div className="col-lg-6 mx-auto">
                    <p className="text-gray-700 mb-4 px-5" style={{ fontSize: '12px' }}>
                        Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices dis gravida parturient urna tristique congue. Curabitur volutpat nulla convallis eget pellentesque. Luctus tellus eu ultrices egestas.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="bg-green-500 text-white px-4 py-2" onClick={returnHome}>
                            Return Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;
