import React, { useState } from "react"

export default function NewsLetter() {

    const [email, setEmail] = useState('')

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Join our waitlist");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    // HandleValidation error
    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        let isValidForm = handleValidation();
        let userData = { email }

        if (isValidForm) {
            setButtonText("Sending");

            Axios.post('/api/mailgun', userData)
                .then((res) => {
                    setShowSuccessMessage(true);
                    setShowFailureMessage(false);
                    setButtonText("Send");
                    console.log(res.data)
                }).catch((err) => {
                    setShowSuccessMessage(false);
                    setShowFailureMessage(true);
                    setButtonText("Send");
                    console.log(err)
                    return;
                })

        }

    }

    return (
        <div className="container ">
            <div className="flex flex-col items-center gap-4">
                <h1 className="font-[700] text-[30px] text-white max-w-[380px] text-center ">This is your chance to be ahead of the game!</h1>
                <p className="text-[16px] max-w-[500px] text-white/60 text-center" >Be the first to experience Mintyplex! join our waitlist and get notified when we launch. Don’t miss out - signup now!</p>
                <div className="flex gap-[10px] flex-wrap justify-center">
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white/10 p-[10px_20px] backdrop-blur-[5px] rounded-[12px] text-white active:border-none focus:border-none focus-visible:bg-none" placeholder="Email address" required />
                    <button className="p-[10px_20px] bg-brand1 text-white rounded-[12px] hover:bg-brand3">{buttonText}</button>
                </div>
                {
                    showSuccessMessage && (
                        <div>
                            Success
                        </div>
                    )
                }
                {
                    showFailureMessage && (
                        <div>
                            Failed!!!
                        </div>
                    )
                }
            </div>
        </div>
    )
}
