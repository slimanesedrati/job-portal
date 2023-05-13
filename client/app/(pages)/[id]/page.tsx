interface IProfile {
  id: number;
}
const Profile = ({ params: { id } }: {params: IProfile}) => {
  return (
    <div>profile: {id}</div>
  )
}

export default Profile