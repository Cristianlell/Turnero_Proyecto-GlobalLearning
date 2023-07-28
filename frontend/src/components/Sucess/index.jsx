
// eslint-disable-next-line react/prop-types
export const Sucess = ({message}) => {
      return (
            <div className="alert alert-success fixed top-1/2 left-[10%] flex justify-center it w-4/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{message}</span>
            </div>
      )
}
