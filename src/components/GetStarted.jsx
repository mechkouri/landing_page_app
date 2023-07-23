import styles from "../Style"
import { arrowUp } from "../assets"

const GetStarted = () => {
    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px]">
                        <div className="flex flex-row justify-between ">
                            <span className="text-gradient">Get</span><img src={arrowUp} alt="arrowup" className="w-[23px] h-[23px] object-contain" />
                        </div>
                        <span className="text-gradient">started</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GetStarted