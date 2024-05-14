import Button from "@/components/alt-sign-in-button"
import Form from "@/components/form"

export default function Page() {
  return (
    <section className="flex justify-center items-center h-screen py-28">
        <div className="flex flex-col justify-center max-w-3xl w-full mx-auto px-4">
            <div className="flex justify-center">
                <div className="login-headings w-3/4 sm:w-1/2 mb-12">
                    <h2 className="px-4">Login</h2>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-3/4 sm:w-1/2">
                    <div className="flex flex-col justify-center">                   
                        <div className="login-headings font-thin">
                            <h4 className="px-4 px">Have an Account?</h4>
                        </div>
                        <div className="mb-7">
                            <Form />
                        </div>
                        <div className="flex flex-col justify-center text-center">
                            <p className="mb-1 text-center">— Or Sign In With —</p>
                            <div className="flex">
                                <Button value="Facebook" url="#" px="px-10 sm:px-12 ml-2"/>
                                <Button value="Twitter" url="#" px="px-12 sm:px-14 mr-1"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}