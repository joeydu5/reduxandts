import React, { useState } from "react";
// import { searchRepositories } from "../state/action-creators";
// import { useDispatch } from "react-redux";
import { useActions } from "../hooks/useActions";
// import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

const List: React.FC = () => {
  const [term, setTerm] = useState("");
  // const dispatch = useDispatch();
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  console.log(data);
  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // dispatch(searchRepositories(term) as any);
    searchRepositories(term);
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label>Search for a package</label>
        <input
          type="text"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default List;
