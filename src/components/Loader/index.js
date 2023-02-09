import { ThreeDots } from  'react-loader-spinner'

const Loader = () => {
    return (
        <div className="text-center">
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#fff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>

    )
}
export default Loader