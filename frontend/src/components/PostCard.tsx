import { Link } from "react-router-dom";

export interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export function PostCard(prop: BlogCardProps) {
  // const navigate = useNavigate();
  return (
    <Link to={`/post/:${prop.id}`}>
      <div className="p-4 border-b pb-4 w-screen max-w-screen-md border-slate-200 cursor-pointer transform transition-all duration-500 hover:scale-90 shadow-lg">
        <div className="flex">
            <Avatar name={prop.authorName} size="small"/>
          <div className="text-sm font-extralight pl-2 flex flex-col justify-center">
            {prop.authorName}
          </div>
          <div className="flex flex-col justify-center pl-2 font-thin text-slate-400 text-sm ">
            {prop.publishedDate}
          </div>
        </div>  
          
        <div className="text-xl font-semibold" >
          {prop.title}
        </div>
        
        <div className="text-md font-thin">
          {prop.content.slice(0, 100) + "..."}
        </div>

        <div className="text-sm font-thin text-slate-500 pt-4">
          {`${Math.ceil(prop.content.length / 100)} minute(s) read`}
        </div>

        {/* <div className="">
          <img
            src={prop.imagelink}
            alt="blog"
            className="cursor-pointer w-[250px] border-black border-2 h-[150px] object-cover rounded-md transform transition-all duration-500 hover:scale-90 shadow-lg "
            onClick={() => {
              navigate(`/blog/:${prop.id}`);
            }}
          />
        </div> */}
      </div>
    </Link>
  );
}

export function Circle(){
  return <div className="h-1 w-1 rounded-full bg-slate-200">
      &#9679;
  </div>
}

export function Avatar({name,size="small"}:{name:string,size:"small"| "big"}){
  return <div className={`relative inline-flex items-center justify-center  rounded-full overflow-hidden bg-gray-900 dark:bg-gray-600 ${size === "small"? "w-4 h-4":"w-7 h-7"}`}>
    <span className="font-medium text-gray-100 dark:text-gray-300">
      {name[0]}
    </span>
  </div>
}