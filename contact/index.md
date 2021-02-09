---
layout: layouts/post.njk
title: Contact
templateClass: tmpl-post
eleventyNavigation:
  key: Contact
  order: 4
---

<div class="container">
    <form class="form-control" name="contact" method="POST" data-netlify="true">
        <div class="mb-3">
            <label class="form-label">Your Name: 
                <input class="form-control" type="text" name="name" required />
            </label>   
        </div>
        <div class="mb-3">
            <label class="form-label">Your Email: 
                <input class="form-control" type="email" name="email" required="true" />
            </label>
        </div>
        <div class="mb-3">
            <label class="form-label">Your Role: 
                <select class="form-select" name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                </select>
            </label>
        </div>
        <div class="mb-3">
            <label class="form-label">Message: 
                <textarea class="form-control" name="message"></textarea>
            </label>
        </div>
        <div class="mb-3">
            <button class="btn btn-primary" type="submit">Send</button>
        </div>
    </form>
</div>