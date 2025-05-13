import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageSquare, Share } from "lucide-react";
import { Link } from "react-router-dom";
import MainNav from "@/components/MainNav";

const Profile = () => {
  const userProfile = {
    name: "Jane Smith",
    username: "janesmith",
    avatar: "https://source.unsplash.com/random/200x200/?portrait",
    bio: "Digital creator & photography enthusiast. Sharing my journey through visual storytelling.",
    followers: 1520,
    following: 384,
    posts: 86
  };

  const userPosts = [
    {
      id: 1,
      content: "Just launched my new portfolio website! Check it out and let me know what you think.",
      likes: 24,
      comments: 5,
      timestamp: "2h ago"
    },
    {
      id: 2,
      content: "Beautiful day for photography! Captured some amazing urban landscapes today. #photography #urban",
      likes: 42,
      comments: 8,
      timestamp: "1d ago"
    },
    {
      id: 3,
      content: "Working on a new design project. Can't wait to share the results!",
      likes: 18,
      comments: 3,
      timestamp: "3d ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <MainNav />

      <main className="container mx-auto py-6 px-4">
        <Card>
          <CardContent className="p-0">
            {/* Cover photo */}
            <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative">
              <div className="absolute -bottom-16 left-8 w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                <img 
                  src={userProfile.avatar} 
                  alt={userProfile.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-20 px-8 pb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold">{userProfile.name}</h1>
                  <p className="text-gray-500">@{userProfile.username}</p>
                </div>
                <Button>Follow</Button>
              </div>
              
              <p className="mt-4">{userProfile.bio}</p>
              
              <div className="flex space-x-6 mt-6">
                <div>
                  <span className="font-bold">{userProfile.posts}</span> Posts
                </div>
                <div>
                  <span className="font-bold">{userProfile.followers}</span> Followers
                </div>
                <div>
                  <span className="font-bold">{userProfile.following}</span> Following
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="posts" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="likes">Likes</TabsTrigger>
          </TabsList>
          <TabsContent value="posts" className="mt-6">
            {userPosts.map(post => (
              <Card key={post.id} className="mb-6">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src={userProfile.avatar} 
                        alt={userProfile.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{userProfile.name}</h3>
                      <p className="text-xs text-gray-500">@{userProfile.username} · {post.timestamp}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="py-2">
                  <p>{post.content}</p>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div className="flex space-x-6">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-primary">
                      <Heart className="w-5 h-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-primary">
                      <MessageSquare className="w-5 h-5" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-primary">
                      <Share className="w-5 h-5" />
                    </button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="photos">
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square rounded-md overflow-hidden bg-gray-200">
                  <img 
                    src={`https://source.unsplash.com/random/300x300/?photography&sig=${i}`} 
                    alt="User photo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="likes">
            <div className="flex flex-col items-center justify-center py-12 text-gray-500">
              <p>No liked posts to show</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profile;
