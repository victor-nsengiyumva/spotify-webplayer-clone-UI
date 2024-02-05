


export default function CustomButton({ content, classname }) {
    return (
        <button type="button" className={`${classname} h-12 font-bold px-6 rounded-full text-sm w-[150px]`}>
            {content}
        </button>
    )
}