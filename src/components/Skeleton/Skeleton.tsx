import style from "./Skeleton.module.css"

const Skeleton = () => {
    return (
        <>
            <div className={`${style.loading_box} ${style.loading}`}></div>
        </>
    )
}

export default Skeleton
