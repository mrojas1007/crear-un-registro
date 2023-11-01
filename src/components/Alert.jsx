const Alert = ({ message, color }) => {

  return (
    <>
      <p className={color}>{message}</p>
    </>
  )
}

export default Alert