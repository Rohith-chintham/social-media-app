import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageSquare, Share } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import MainNav from "@/components/MainNav";

const Index = () => {
  const { toast } = useToast();
  const [newPostContent, setNewPostContent] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Jane Smith",
      username: "janesmith",
      avatar: "https://source.unsplash.com/random/100x100/?portrait",
      content: "Just launched my new portfolio website! Check it out and let me know what you think.",
      likes: 24,
      comments: 5,
      timestamp: "2h ago"
    },
    {
      id: 2,
      author: "Alex Johnson",
      username: "alexj",
      avatar: "https://source.unsplash.com/random/100x100/?portrait",
      content: "Beautiful day for hiking! The views from the mountain top were absolutely breathtaking. #nature #outdoors",
      likes: 56,
      comments: 8,
      timestamp: "4h ago"
    },
    {
      id: 3,
      author: "Sam Wilson",
      username: "samwilson",
      avatar: "https://source.unsplash.com/random/100x100/?portrait",
      content: "Just finished reading an amazing book that I couldn't put down. Highly recommend 'The Silent Patient' if you're into psychological thrillers!",
      likes: 42,
      comments: 12,
      timestamp: "6h ago"
    }
  ]);

  const handleCreatePost = () => {
    if (!newPostContent.trim()) {
      toast({
        description: "Post content cannot be empty",
        variant: "destructive"
      });
      return;
    }

    const newPost = {
      id: posts.length + 1,
      author: "Current User",
      username: "currentuser",
      avatar: "https://source.unsplash.com/random/100x100/?portrait",
      content: newPostContent,
      likes: 0,
      comments: 0,
      timestamp: "Just now"
    };

    setPosts([newPost, ...posts]);
    setNewPostContent("");
    toast({
      description: "Post created successfully!",
    });
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <MainNav />

      <main className="container mx-auto py-6 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left sidebar */}
          <div className="hidden md:block col-span-1">
            <Card>
              <CardHeader>
                <h3 className="font-medium">Profile</h3>
              </CardHeader>
              <CardContent className="flex flex-col items-center pt-0">
                <Link to="/profile" className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src="https://source.unsplash.com/random/200x200/?portrait" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </Link>
                <Link to="/profile">
                  <h2 className="font-bold text-lg">Current User</h2>
                </Link>
                <p className="text-sm text-gray-500">@currentuser</p>
                <div className="flex justify-between w-full mt-4">
                  <div className="text-center">
                    <p className="font-bold">120</p>
                    <p className="text-xs text-gray-500">Posts</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold">1.5k</p>
                    <p className="text-xs text-gray-500">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold">300</p>
                    <p className="text-xs text-gray-500">Following</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="col-span-1 md:col-span-2">
            {/* Create post */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <Textarea
                  placeholder="What's on your mind?"
                  className="resize-none mb-4"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                />
                <div className="flex justify-end">
                  <Button onClick={handleCreatePost}>Post</Button>
                </div>
              </CardContent>
            </Card>

            {/* Feed */}
            {posts.map((post) => (
              <Card key={post.id} className="mb-6">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <Link to="/profile" className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src={post.avatar} 
                        alt={post.author} 
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div>
                      <Link to="/profile">
                        <h3 className="font-medium">{post.author}</h3>
                      </Link>
                      <p className="text-xs text-gray-500">@{post.username} · {post.timestamp}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="py-2">
                  <p>{post.content}</p>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div className="flex space-x-6">
                    <button 
                      className="flex items-center space-x-1 text-gray-500 hover:text-primary"
                      onClick={() => handleLike(post.id)}
                    >
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
          </div>

          {/* Right sidebar */}
          <div className="hidden md:block col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <h3 className="font-medium">Suggested Friends</h3>
              </CardHeader>
              <CardContent className="pt-0">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center mb-4 last:mb-0">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src={`https://source.unsplash.com/random/100x100/?portrait&sig=${i}`} 
                        alt="Suggested friend" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">John Doe {i}</h4>
                      <p className="text-xs text-gray-500">@johndoe{i}</p>
                    </div>
                    <Button size="sm" variant="outline">Follow</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="font-medium">Trending Topics</h3>
              </CardHeader>
              <CardContent className="pt-0">
                {["#WebDevelopment", "#TechNews", "#UIDesign", "#ArtificialIntelligence"].map((topic, i) => (
                  <div key={i} className="mb-3 last:mb-0">
                    <p className="font-medium text-sm text-primary">{topic}</p>
                    <p className="text-xs text-gray-500">{1000 + (i * 500)} posts</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
