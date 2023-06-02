export function Login() {
    return (
        <div className="flex flex-col">
            <div className="bg-white shadow-md rounded md:px-8 px-4 pt-6 pb-8 md:m-4 m-1">
            <h2 className="text-2xl font-bold">Login</h2>

                <div className="flex flew-col justify-center flex-wrap">
                    <input type="text" placeholder="E-Mail" className="input basis-full input-bordered w-full max-w-xs mt-5 m-2" />
                    <input type="password" placeholder="Password" className="input basis-full input-bordered w-full max-w-xs mt-5 m-2" />
                <div className="btn btn-ghost mt-5 m-2">Anmelden</div>

                </div>
            </div>
        </div>
    );
}
