import ArrayTypeExa from "./ArrayTypeExa"
import BooleanTypeExa from "./BooleanTypeExa";
import NumberTypeExa from "./NumberTypeExa";
import ObjectTypeExa from "./ObjectTypeExa";
import OnlyNumber from "./OnlyNumber";
import UseContextExa from "./UseContextExa";
import UseReducerExa from "./UseReducerExa";
import UseRefExa from "./UseRefExa";

const StatesExa = () => {
    // use context
    // const { user, setUser } = useContext(UserContext);
    // console.log(user?.name);
    return (
        <>
            <div className="container text-center my-3">
                <h1 className="my-5">Hooks with all types.</h1>
                <ArrayTypeExa />
                <BooleanTypeExa />
                <NumberTypeExa/>
                <ObjectTypeExa/>
                <OnlyNumber/>
                <UseContextExa/>               
                <UseRefExa/>         
                <UseReducerExa/>
            </div>
        </>
    );
};

export default StatesExa;
