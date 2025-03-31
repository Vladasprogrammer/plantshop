import SyncLoader from "react-spinners/SyncLoader";


export default function DataHandler({ loading, error, children }) {

  if (loading) {
    return (
      <SyncLoader color="#50806B" />
    )
  }

  if (error) {
    return (
      <>
        error: {error}
      </>
    )
  }

  return children;
}