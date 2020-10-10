# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1) Our class BlogPostsController inheirits from ApplicationController
class BlogPostsController < ApplicationController
  def index
    # 2) search the blogpost table and store each row in the @posts instance object
    @posts = BlogPost.all
  end

  def show
    # 3) find only the blogpost item that has the id defined in params[:id] and store it in the @post instance object
    @post = BlogPost.find(params[:id])
  end

  # 4) create a method to add a new Post element
  def new
    @post = Post.new
  end

  def create
    # 5) create a new blogpost item using blog_post_params parameters and store it in the @post instance object
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) update the blogpost item defined by [params:id] with the new blog_post_params
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7) if the post is not successfully removed, redirect the user to the blog_post_path using the Blogpost entry defined by params[:id]
      redirect_to blog_post_path(@post)
    end
  end

  # 8) define a private section for methods only accessible to this class
  private
  def blog_post_params
    # 9) make sure that blog_post is present and allow access to the elements :title and :content
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) create the association between Blogpost and Comment databases such that a BlogPost can have many comments
  has_many :comments
end
