const head = `
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
`

export const templates = [{
    name: 'Blank',
    content: `<!DOCTYPE html><html><head>${head}</head><body>
<div class="container"><h1>Edit Here</p></div>
</body></html>`
}, {
  name: 'Album',
  content: `
  <!doctype html>
  <html lang="en">
    <head>
      <base href="https://getbootstrap.com/docs/5.1/examples/album/">
      ${head}
      <link href="album.css" rel="stylesheet">
    </head>
    <body>

<header>
<div class="collapse bg-dark" id="navbarHeader">
  <div class="container">
    <div class="row">
      <div class="col-sm-8 col-md-7 py-4">
        <h4 class="text-white">About</h4>
        <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
      </div>
      <div class="col-sm-4 offset-md-1 py-4">
        <h4 class="text-white">Contact</h4>
        <ul class="list-unstyled">
          <li><a href="#" class="text-white">Follow on Twitter</a></li>
          <li><a href="#" class="text-white">Like on Facebook</a></li>
          <li><a href="#" class="text-white">Email me</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="navbar navbar-dark bg-dark shadow-sm">
  <div class="container">
    <a href="#" class="navbar-brand d-flex align-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
      <strong>Album</strong>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</div>
</header>

<main>

<section class="py-5 text-center container">
  <div class="row py-lg-5">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light">Album example</h1>
      <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
      <p>
        <a href="#" class="btn btn-primary my-2">Main call to action</a>
        <a href="#" class="btn btn-secondary my-2">Secondary action</a>
      </p>
    </div>
  </div>
</section>

<div class="album py-5 bg-light">
  <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

          <div class="card-body">
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</main>

<footer class="text-muted py-5">
<div class="container">
  <p class="float-end mb-1">
    <a href="#">Back to top</a>
  </p>
  <p class="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
  <p class="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.0/getting-started/introduction/">getting started guide</a>.</p>
</div>
</footer>

    </body>
  </html>
  `
}, {
  name: 'Blog',
  content: `
  <!doctype html>
  <html lang="en">
    <head>
      <base href="https://getbootstrap.com/docs/5.1/examples/blog/">
      ${head}
      <link href="blog.css" rel="stylesheet">
    </head>
    <body>

    <div class="container">
    <header class="blog-header py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <a class="link-secondary" href="#">Subscribe</a>
        </div>
        <div class="col-4 text-center">
          <a class="blog-header-logo text-dark" href="#">Large</a>
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <a class="link-secondary" href="#" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
          </a>
          <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
        </div>
      </div>
    </header>

    <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-between">
        <a class="p-2 link-secondary" href="#">World</a>
        <a class="p-2 link-secondary" href="#">U.S.</a>
        <a class="p-2 link-secondary" href="#">Technology</a>
        <a class="p-2 link-secondary" href="#">Design</a>
        <a class="p-2 link-secondary" href="#">Culture</a>
        <a class="p-2 link-secondary" href="#">Business</a>
        <a class="p-2 link-secondary" href="#">Politics</a>
        <a class="p-2 link-secondary" href="#">Opinion</a>
        <a class="p-2 link-secondary" href="#">Science</a>
        <a class="p-2 link-secondary" href="#">Health</a>
        <a class="p-2 link-secondary" href="#">Style</a>
        <a class="p-2 link-secondary" href="#">Travel</a>
      </nav>
    </div>
  </div>

  <main class="container">
    <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
        <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
        <p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
      </div>
    </div>

    <div class="row mb-2">
      <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">World</strong>
            <h3 class="mb-0">Featured post</h3>
            <div class="mb-1 text-muted">Nov 12</div>
            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="stretched-link">Continue reading</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">Design</strong>
            <h3 class="mb-0">Post title</h3>
            <div class="mb-1 text-muted">Nov 11</div>
            <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="stretched-link">Continue reading</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

          </div>
        </div>
      </div>
    </div>

    <div class="row g-5">
      <div class="col-md-8">
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
          From the Firehose
        </h3>

        <article class="blog-post">
          <h2 class="blog-post-title">Sample blog post</h2>
          <p class="blog-post-meta">January 1, 2021 by <a href="#">Mark</a></p>

          <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
          <hr>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h2>Blockquotes</h2>
          <p>This is an example blockquote in action:</p>
          <blockquote class="blockquote">
            <p>Quoted text goes here.</p>
          </blockquote>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h3>Example lists</h3>
          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
          <ul>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
          </ul>
          <p>And this is an ordered list:</p>
          <ol>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
          </ol>
          <p>And this is a definiton list:</p>
          <dl>
            <dt>HyperText Markup Language (HTML)</dt>
            <dd>The language used to describe and define the content of a Web page</dd>
            <dt>Cascading Style Sheets (CSS)</dt>
            <dd>Used to describe the appearance of Web content</dd>
            <dt>JavaScript (JS)</dt>
            <dd>The programming language used to build advanced Web sites and applications</dd>
          </dl>
          <h2>Inline HTML elements</h2>
          <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
          <ul>
            <li><strong>To bold text</strong>, use <code class="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
            <li><em>To italicize text</em>, use <code class="language-plaintext highlighter-rouge">&lt;em&gt;</code>.</li>
            <li>Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use <code class="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code class="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
            <li>Citations, like <cite>— Mark Otto</cite>, should use <code class="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
            <li><del>Deleted</del> text should use <code class="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code class="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
            <li>Superscript <sup>text</sup> uses <code class="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code class="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.</li>
          </ul>
          <p>Most of these elements are styled by browsers with few modifications on our part.</p>
          <h2>Heading</h2>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h3>Sub-heading</h3>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <pre><code>Example code block</code></pre>
          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
        </article>

        <article class="blog-post">
          <h2 class="blog-post-title">Another blog post</h2>
          <p class="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>

          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <blockquote>
            <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
          </blockquote>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h3>Example table</h3>
          <p>And don't forget about tables in these posts:</p>
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Upvotes</th>
                <th>Downvotes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alice</td>
                <td>10</td>
                <td>11</td>
              </tr>
              <tr>
                <td>Bob</td>
                <td>4</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Charlie</td>
                <td>7</td>
                <td>9</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Totals</td>
                <td>21</td>
                <td>23</td>
              </tr>
            </tfoot>
          </table>

          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
        </article>

        <article class="blog-post">
          <h2 class="blog-post-title">New feature</h2>
          <p class="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>

          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <ul>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
          </ul>
          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
        </article>

        <nav class="blog-pagination" aria-label="Pagination">
          <a class="btn btn-outline-primary" href="#">Older</a>
          <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
        </nav>

      </div>

      <div class="col-md-4">
        <div class="position-sticky" style="top: 2rem;">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">About</h4>
            <p class="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
          </div>

          <div class="p-4">
            <h4 class="fst-italic">Archives</h4>
            <ol class="list-unstyled mb-0">
              <li><a href="#">March 2021</a></li>
              <li><a href="#">February 2021</a></li>
              <li><a href="#">January 2021</a></li>
              <li><a href="#">December 2020</a></li>
              <li><a href="#">November 2020</a></li>
              <li><a href="#">October 2020</a></li>
              <li><a href="#">September 2020</a></li>
              <li><a href="#">August 2020</a></li>
              <li><a href="#">July 2020</a></li>
              <li><a href="#">June 2020</a></li>
              <li><a href="#">May 2020</a></li>
              <li><a href="#">April 2020</a></li>
            </ol>
          </div>

          <div class="p-4">
            <h4 class="fst-italic">Elsewhere</h4>
            <ol class="list-unstyled">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>

  </main>

  <footer class="blog-footer">
    <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
    <p>
      <a href="#">Back to top</a>
    </p>
  </footer>
    </body>
  </html>
  `
}, {
  name: 'Carousel',
  content: `
  <!doctype html>
  <html lang="en">
    <head>
      <base href="https://getbootstrap.com/docs/5.1/examples/carousel/">
      ${head}
      <link href="carousel.css" rel="stylesheet">
    </head>
    <body>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Carousel</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</header>

<main>

  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>


  <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. -->

  <div class="container marketing">

    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Heading</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
    </div><!-- /.row -->


    <!-- START THE FEATURETTES -->

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
        <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div class="col-md-5">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
        <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
      </div>
      <div class="col-md-5 order-md-1">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
        <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
      </div>
      <div class="col-md-5">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div>

    <hr class="featurette-divider">

    <!-- /END THE FEATURETTES -->

  </div><!-- /.container -->


  <!-- FOOTER -->
  <footer class="container">
    <p class="float-end"><a href="#">Back to top</a></p>
    <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </footer>
</main>

    </body>
  </html>
  `
}, {
  name: 'Cheatsheet',
  content: `
  <!doctype html>
  <html lang="en">
    <head>
      <base href="https://getbootstrap.com/docs/5.1/examples/cheatsheet/">
      ${head}
      <!-- Custom styles for this template -->
      <link href="cheatsheet.css" rel="stylesheet">
    </head>
    <body class="bg-light">


    <header class="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
    <div class="container-fluid d-flex align-items-center">
      <h1 class="d-flex align-items-center fs-4 text-white mb-0">
        <img src="/docs/5.1/assets/brand/bootstrap-logo-white.svg" width="38" height="30" class="me-3" alt="Bootstrap">
        Cheatsheet
      </h1>
      <a href="/docs/5.1/examples/cheatsheet-rtl/" class="ms-auto link-light" hreflang="ar">RTL cheatsheet</a>
    </div>
  </header>
  <aside class="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
    <h2 class="h6 pt-4 pb-3 mb-4 border-bottom">On this page</h2>
    <nav class="small" id="toc">
      <ul class="list-unstyled">
        <li class="my-2">
          <button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse" aria-controls="contents-collapse">Contents</button>
          <ul class="list-unstyled ps-3 collapse" id="contents-collapse">
            <li><a class="d-inline-flex align-items-center rounded" href="#typography">Typography</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#images">Images</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#tables">Tables</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#figures">Figures</a></li>
          </ul>
        </li>
        <li class="my-2">
          <button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#forms-collapse" aria-controls="forms-collapse">Forms</button>
          <ul class="list-unstyled ps-3 collapse" id="forms-collapse">
            <li><a class="d-inline-flex align-items-center rounded" href="#overview">Overview</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#disabled-forms">Disabled forms</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#sizing">Sizing</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#input-group">Input group</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#floating-labels">Floating labels</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#validation">Validation</a></li>
          </ul>
        </li>
        <li class="my-2">
          <button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#components-collapse" aria-controls="components-collapse">Components</button>
          <ul class="list-unstyled ps-3 collapse" id="components-collapse">
            <li><a class="d-inline-flex align-items-center rounded" href="#accordion">Accordion</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#alerts">Alerts</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#badge">Badge</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#breadcrumb">Breadcrumb</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#buttons">Buttons</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#button-group">Button group</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#card">Card</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#carousel">Carousel</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#dropdowns">Dropdowns</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#list-group">List group</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#modal">Modal</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#navs">Navs</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#navbar">Navbar</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#pagination">Pagination</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#popovers">Popovers</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#progress">Progress</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#scrollspy">Scrollspy</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#spinners">Spinners</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#toasts">Toasts</a></li>
            <li><a class="d-inline-flex align-items-center rounded" href="#tooltips">Tooltips</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
  <div class="bd-cheatsheet container-fluid bg-body">
    <section id="content">
      <h2 class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">Contents</h2>

      <article class="my-3" id="typography">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Typography</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/content/typography/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <p class="display-1">Display 1</p>
          <p class="display-2">Display 2</p>
          <p class="display-3">Display 3</p>
          <p class="display-4">Display 4</p>
          <p class="display-5">Display 5</p>
          <p class="display-6">Display 6</p>
          </div>

          <div class="bd-example">
          <p class="h1">Heading 1</p>
          <p class="h2">Heading 2</p>
          <p class="h3">Heading 3</p>
          <p class="h4">Heading 4</p>
          <p class="h5">Heading 5</p>
          <p class="h6">Heading 6</p>
          </div>

          <div class="bd-example">
          <p class="lead">
            This is a lead paragraph. It stands out from regular paragraphs.
          </p>
          </div>

          <div class="bd-example">
          <p>You can use the mark tag to <mark>highlight</mark> text.</p>
          <p><del>This line of text is meant to be treated as deleted text.</del></p>
          <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
          <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
          <p><u>This line of text will render as underlined.</u></p>
          <p><small>This line of text is meant to be treated as fine print.</small></p>
          <p><strong>This line rendered as bold text.</strong></p>
          <p><em>This line rendered as italicized text.</em></p>
          </div>

          <div class="bd-example">
          <blockquote class="blockquote">
            <p>A well-known quote, contained in a blockquote element.</p>
            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
          </div>

          <div class="bd-example">
          <ul class="list-unstyled">
            <li>This is a list.</li>
            <li>It appears completely unstyled.</li>
            <li>Structurally, it's still a list.</li>
            <li>However, this style only applies to immediate child elements.</li>
            <li>Nested lists:
              <ul>
                <li>are unaffected by this style</li>
                <li>will still show a bullet</li>
                <li>and have appropriate left margin</li>
              </ul>
            </li>
            <li>This may still come in handy in some situations.</li>
          </ul>
          </div>

          <div class="bd-example">
          <ul class="list-inline">
            <li class="list-inline-item">This is a list item.</li>
            <li class="list-inline-item">And another one.</li>
            <li class="list-inline-item">But they're displayed inline.</li>
          </ul>
          </div>
        </div>
      </article>
      <article class="my-3" id="images">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Images</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/content/images/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <svg class="bd-placeholder-img bd-placeholder-img-lg img-fluid" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Responsive image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Responsive image</text></svg>

          </div>

          <div class="bd-example">
          <svg class="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200" preserveAspectRatio="xMidYMid slice" focusable="false"><title>A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">200x200</text></svg>

          </div>
        </div>
      </article>
      <article class="my-3" id="tables">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Tables</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/content/tables/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <table class="table table-striped">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>
          </div>

          <div class="bd-example">
          <table class="table table-dark table-borderless">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>
          </div>

          <div class="bd-example">
          <table class="table table-hover">
            <thead>
            <tr>
              <th scope="col">Class</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">Default</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>

            <tr class="table-primary">
              <th scope="row">Primary</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr class="table-secondary">
              <th scope="row">Secondary</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr class="table-success">
              <th scope="row">Success</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr class="table-danger">
              <th scope="row">Danger</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr class="table-warning">
              <th scope="row">Warning</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr class="table-info">
              <th scope="row">Info</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr class="table-light">
              <th scope="row">Light</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            <tr class="table-dark">
              <th scope="row">Dark</th>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
            </tbody>
          </table>
          </div>

          <div class="bd-example">
          <table class="table table-sm table-bordered">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </table>
          </div>
        </div>
      </article>
      <article class="my-3" id="figures">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Figures</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/content/figures/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <figure class="figure">
            <svg class="bd-placeholder-img figure-img img-fluid rounded" width="400" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 400x300" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">400x300</text></svg>

            <figcaption class="figure-caption">A caption for the above image.</figcaption>
          </figure>
          </div>
        </div>
      </article>
    </section>

    <section id="forms">
      <h2 class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">Forms</h2>

      <article class="my-3" id="overview">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Overview</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/forms/overview/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <fieldset class="mb-3">
              <legend>Radios buttons</legend>
              <div class="form-check">
                <input type="radio" name="radios" class="form-check-input" id="exampleRadio1">
                <label class="form-check-label" for="exampleRadio1">Default radio</label>
              </div>
              <div class="mb-3 form-check">
                <input type="radio" name="radios" class="form-check-input" id="exampleRadio2">
                <label class="form-check-label" for="exampleRadio2">Another radio</label>
              </div>
            </fieldset>
            <div class="mb-3">
              <label class="form-label" for="customFile">Upload</label>
              <input type="file" class="form-control" id="customFile">
            </div>
            <div class="mb-3 form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
            </div>
            <div class="mb-3">
              <label for="customRange3" class="form-label">Example range</label>
              <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          </div>
        </div>
      </article>
      <article class="my-3" id="disabled-forms">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Disabled forms</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/forms/overview/#disabled-forms">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <form>
            <fieldset disabled aria-label="Disabled fieldset example">
              <div class="mb-3">
                <label for="disabledTextInput" class="form-label">Disabled input</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
              </div>
              <div class="mb-3">
                <label for="disabledSelect" class="form-label">Disabled select menu</label>
                <select id="disabledSelect" class="form-select">
                  <option>Disabled select</option>
                </select>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
                  <label class="form-check-label" for="disabledFieldsetCheck">
                    Can't check this
                  </label>
                </div>
              </div>
              <fieldset class="mb-3">
                <legend>Disabled radios buttons</legend>
                <div class="form-check">
                  <input type="radio" name="radios" class="form-check-input" id="disabledRadio1" disabled>
                  <label class="form-check-label" for="disabledRadio1">Disabled radio</label>
                </div>
                <div class="mb-3 form-check">
                  <input type="radio" name="radios" class="form-check-input" id="disabledRadio2" disabled>
                  <label class="form-check-label" for="disabledRadio2">Another radio</label>
                </div>
              </fieldset>
              <div class="mb-3">
                <label class="form-label" for="disabledCustomFile">Upload</label>
                <input type="file" class="form-control" id="disabledCustomFile" disabled>
              </div>
              <div class="mb-3 form-check form-switch">
                <input class="form-check-input" type="checkbox" id="disabledSwitchCheckChecked" checked disabled>
                <label class="form-check-label" for="disabledSwitchCheckChecked">Disabled checked switch checkbox input</label>
              </div>
              <div class="mb-3">
                <label for="disabledRange" class="form-label">Disabled range</label>
                <input type="range" class="form-range" min="0" max="5" step="0.5" id="disabledRange">
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </fieldset>
          </form>
          </div>
        </div>
      </article>
      <article class="my-3" id="sizing">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Sizing</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/forms/form-control/#sizing">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <div class="mb-3">
            <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
          </div>
          <div class="mb-3">
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="mb-3">
            <input type="file" class="form-control form-control-lg" aria-label="Large file input example">
          </div>
          </div>

          <div class="bd-example">
          <div class="mb-3">
            <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
          </div>
          <div class="mb-3">
            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="mb-3">
            <input type="file" class="form-control form-control-sm" aria-label="Small file input example">
          </div>
          </div>
        </div>
      </article>
      <article class="my-3" id="input-group">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Input group</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/forms/input-group/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <span class="input-group-text" id="basic-addon2">@example.com</span>
          </div>
          <label for="basic-url" class="form-label">Your vanity URL</label>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
            <span class="input-group-text">.00</span>
          </div>
          <div class="input-group">
            <span class="input-group-text">With textarea</span>
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>
          </div>
        </div>
      </article>
      <article class="my-3" id="floating-labels">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Floating labels</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/forms/floating-labels/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <form>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
            </div>
          </form>
          </div>
        </div>
      </article>
      <article class="my-3" id="validation">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Validation</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/forms/validation/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <form class="row g-3">
            <div class="col-md-4">
              <label for="validationServer01" class="form-label">First name</label>
              <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="col-md-4">
              <label for="validationServer02" class="form-label">Last name</label>
              <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required>
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="col-md-4">
              <label for="validationServerUsername" class="form-label">Username</label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend3">@</span>
                <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3" required>
                <div class="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationServer03" class="form-label">City</label>
              <input type="text" class="form-control is-invalid" id="validationServer03" required>
              <div class="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div class="col-md-3">
              <label for="validationServer04" class="form-label">State</label>
              <select class="form-select is-invalid" id="validationServer04" required>
                <option selected disabled value="">Choose...</option>
                <option>...</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid state.
              </div>
            </div>
            <div class="col-md-3">
              <label for="validationServer05" class="form-label">Zip</label>
              <input type="text" class="form-control is-invalid" id="validationServer05" required>
              <div class="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
                <label class="form-check-label" for="invalidCheck3">
                  Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
          </form>
          </div>
        </div>
      </article>
    </section>

    <section id="components">
      <h2 class="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">Components</h2>

      <article class="my-3" id="accordion">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Accordion</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/accordion/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h4 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h4>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h4 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Accordion Item #2
                </button>
              </h4>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h4 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Accordion Item #3
                </button>
              </h4>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </article>
      <article class="my-3" id="alerts">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Alerts</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/alerts/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">

          <div class="alert alert-primary alert-dismissible fade show" role="alert">
            A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          <div class="alert alert-secondary alert-dismissible fade show" role="alert">
            A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
            A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          <div class="alert alert-info alert-dismissible fade show" role="alert">
            A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          <div class="alert alert-light alert-dismissible fade show" role="alert">
            A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          <div class="alert alert-dark alert-dismissible fade show" role="alert">
            A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          </div>

          <div class="bd-example">
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Well done!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr>
            <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
          </div>
          </div>
        </div>
      </article>
      <article class="my-3" id="badge">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Badge</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/badge/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <p class="h1">Example heading <span class="badge bg-primary">New</span></p>
          <p class="h2">Example heading <span class="badge bg-secondary">New</span></p>
          <p class="h3">Example heading <span class="badge bg-success">New</span></p>
          <p class="h4">Example heading <span class="badge bg-danger">New</span></p>
          <p class="h5">Example heading <span class="badge bg-warning text-dark">New</span></p>
          <p class="h6">Example heading <span class="badge bg-info text-dark">New</span></p>
          <p class="h6">Example heading <span class="badge bg-light text-dark">New</span></p>
          <p class="h6">Example heading <span class="badge bg-dark">New</span></p>
          </div>

          <div class="bd-example">

          <span class="badge rounded-pill bg-primary">Primary</span>
          <span class="badge rounded-pill bg-secondary">Secondary</span>
          <span class="badge rounded-pill bg-success">Success</span>
          <span class="badge rounded-pill bg-danger">Danger</span>
          <span class="badge rounded-pill bg-warning text-dark">Warning</span>
          <span class="badge rounded-pill bg-info text-dark">Info</span>
          <span class="badge rounded-pill bg-light text-dark">Light</span>
          <span class="badge rounded-pill bg-dark">Dark</span>
          </div>
        </div>
      </article>
      <article class="my-3" id="breadcrumb">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Breadcrumb</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/breadcrumb/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item"><a href="#">Library</a></li>
              <li class="breadcrumb-item active" aria-current="page">Data</li>
            </ol>
          </nav>
          </div>
        </div>
      </article>
      <article class="my-3" id="buttons">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Buttons</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/buttons/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">

          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-secondary">Secondary</button>
          <button type="button" class="btn btn-success">Success</button>
          <button type="button" class="btn btn-danger">Danger</button>
          <button type="button" class="btn btn-warning">Warning</button>
          <button type="button" class="btn btn-info">Info</button>
          <button type="button" class="btn btn-light">Light</button>
          <button type="button" class="btn btn-dark">Dark</button>

          <button type="button" class="btn btn-link">Link</button>
          </div>

          <div class="bd-example">

          <button type="button" class="btn btn-outline-primary">Primary</button>
          <button type="button" class="btn btn-outline-secondary">Secondary</button>
          <button type="button" class="btn btn-outline-success">Success</button>
          <button type="button" class="btn btn-outline-danger">Danger</button>
          <button type="button" class="btn btn-outline-warning">Warning</button>
          <button type="button" class="btn btn-outline-info">Info</button>
          <button type="button" class="btn btn-outline-light">Light</button>
          <button type="button" class="btn btn-outline-dark">Dark</button>
          </div>

          <div class="bd-example">
          <button type="button" class="btn btn-primary btn-sm">Small button</button>
          <button type="button" class="btn btn-primary">Standard button</button>
          <button type="button" class="btn btn-primary btn-lg">Large button</button>
          </div>
        </div>
      </article>
      <article class="my-3" id="button-group">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Button group</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/button-group/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group me-2" role="group" aria-label="First group">
              <button type="button" class="btn btn-secondary">1</button>
              <button type="button" class="btn btn-secondary">2</button>
              <button type="button" class="btn btn-secondary">3</button>
              <button type="button" class="btn btn-secondary">4</button>
            </div>
            <div class="btn-group me-2" role="group" aria-label="Second group">
              <button type="button" class="btn btn-secondary">5</button>
              <button type="button" class="btn btn-secondary">6</button>
              <button type="button" class="btn btn-secondary">7</button>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
              <button type="button" class="btn btn-secondary">8</button>
            </div>
          </div>
          </div>
        </div>
      </article>
      <article class="my-3" id="card">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Card</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/card/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <div class="row  row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card">
                <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>

                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header">
                  Featured
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <div class="card-footer text-muted">
                  2 days ago
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                  <li class="list-group-item">A second item</li>
                  <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="row g-0">
                  <div class="col-md-4">
                    <svg class="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>

                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </article>
      <article class="my-3" id="carousel">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Carousel</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/carousel/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>

                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"/><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>

                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"/><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>

                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          </div>
        </div>
      </article>
      <article class="my-3" id="dropdowns">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Dropdowns</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/dropdowns/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
            <div class="dropdown">
              <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                <li><h6 class="dropdown-header">Dropdown header</h6></li>
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><h6 class="dropdown-header">Dropdown header</h6></li>
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButtonLG" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLG">
                <li><h6 class="dropdown-header">Dropdown header</h6></li>
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
          </div>
          </div>

          <div class="bd-example">
          <div class="btn-group">
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div><!-- /btn-group -->
          <div class="btn-group">
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div><!-- /btn-group -->
          <div class="btn-group">
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div><!-- /btn-group -->
          <div class="btn-group">
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div><!-- /btn-group -->
          <div class="btn-group">
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div><!-- /btn-group -->
          <div class="btn-group">
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div><!-- /btn-group -->
          </div>

          <div class="bd-example">
          <div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
            <div class="dropend">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropendMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Dropend button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropendMenuButton">
                <li><h6 class="dropdown-header">Dropdown header</h6></li>
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
            <div class="dropup">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropupMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Dropup button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropupMenuButton">
                <li><h6 class="dropdown-header">Dropdown header</h6></li>
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
            <div class="dropstart">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropstartMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Dropstart button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropstartMenuButton">
                <li><h6 class="dropdown-header">Dropdown header</h6></li>
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
          </div>
          </div>

          <div class="bd-example">
          <div class="btn-group">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownRightMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                End-aligned menu
              </button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownRightMenuButton">
                <li><h6 class="dropdown-header">Dropdown header</h6></li>
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </article>
      <article class="my-3" id="list-group">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>List group</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/list-group/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <ul class="list-group">
            <li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
          </div>

          <div class="bd-example">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
          </div>

          <div class="bd-example">
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">A simple default list group item</a>

            <a href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
            <a href="#" class="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
          </div>
          </div>
        </div>
      </article>
      <article class="my-3" id="modal">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Modal</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/modal/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <div class="d-flex justify-content-between flex-wrap">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalDefault">
              Launch demo modal
            </button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropLive">
              Launch static backdrop modal
            </button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
              Vertically centered scrollable modal
            </button>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">
              Full screen
            </button>
          </div>
          </div>
        </div>
      </article>
      <article class="my-3" id="navs">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Navs</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/navs-tabs/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <nav class="nav">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled">Disabled</a>
          </nav>
          </div>

          <div class="bd-example">
          <nav>
            <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
              <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
              <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <p><strong>This is some placeholder content the Home tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <p><strong>This is some placeholder content the Profile tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <p><strong>This is some placeholder content the Contact tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
            </div>
          </div>
          </div>

          <div class="bd-example">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          </div>
        </div>
      </article>
      <article class="my-3" id="navbar">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Navbar</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/navbar/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src="/docs/5.1/assets/brand/bootstrap-logo-white.svg" width="38" height="30" class="d-inline-block align-top" alt="Bootstrap" loading="lazy"
                     style="filter: invert(1) grayscale(100%) brightness(200%);">
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                  </li>
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-dark" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>

          <nav class="navbar navbar-expand-lg navbar-dark bg-primary mt-5">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src="/docs/5.1/assets/brand/bootstrap-logo-white.svg" width="38" height="30" class="d-inline-block align-top" alt="Bootstrap" loading="lazy">
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent2">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                  </li>
                </ul>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
          </div>
        </div>
      </article>
      <article class="my-3" id="pagination">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Pagination</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/pagination/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <nav aria-label="Pagination example">
            <ul class="pagination pagination-sm">
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul>
          </nav>
          </div>

          <div class="bd-example">
          <nav aria-label="Standard pagination example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
          </div>

          <div class="bd-example">
          <nav aria-label="Another pagination example">
            <ul class="pagination pagination-lg flex-wrap">
              <li class="page-item disabled">
                <a class="page-link">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
          </div>
        </div>
      </article>
      <article class="my-3" id="popovers">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Popovers</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/popovers/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
          </div>

          <div class="bd-example">
          <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on top
          </button>
          <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on end
          </button>
          <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on bottom
          </button>
          <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
            Popover on start
          </button>
          </div>
        </div>
      </article>
      <article class="my-3" id="progress">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Progress</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/progress/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
          <div class="progress mb-3">
            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
          </div>
          <div class="progress mb-3">
            <div class="progress-bar bg-success w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
          </div>
          <div class="progress mb-3">
            <div class="progress-bar bg-info text-dark w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
          <div class="progress mb-3">
            <div class="progress-bar bg-warning text-dark w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
          </div>
          <div class="progress">
            <div class="progress-bar bg-danger w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
          </div>
          </div>

          <div class="bd-example">
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          </div>
        </div>
      </article>
      <article class="my-3" id="scrollspy">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Scrollspy</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/scrollspy/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">
            <nav id="navbar-example2" class="navbar navbar-light bg-light px-3">
              <a class="navbar-brand" href="#">Navbar</a>
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link active" href="#scrollspyHeading1">First</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#scrollspyHeading2">Second</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                    <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
              <h4 id="scrollspyHeading1">First heading</h4>
              <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
              <h4 id="scrollspyHeading2">Second heading</h4>
              <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
              <h4 id="scrollspyHeading3">Third heading</h4>
              <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
              <h4 id="scrollspyHeading4">Fourth heading</h4>
              <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
              <h4 id="scrollspyHeading5">Fifth heading</h4>
              <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
            </div>
          </div>
        </div>
      </article>
      <article class="my-3" id="spinners">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Spinners</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/spinners/">Documentation</a>
        </div>

        <div>
          <div class="bd-example">

          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-border text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-border text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          </div>

          <div class="bd-example">

          <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          </div>
        </div>
      </article>
      <article class="my-3" id="toasts">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Toasts</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/toasts/">Documentation</a>
        </div>

        <div>
          <div class="bd-example bg-dark p-5 align-items-center">
          <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"/></svg>

              <strong class="me-auto">Bootstrap</strong>
              <small class="text-muted">11 mins ago</small>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
              Hello, world! This is a toast message.
            </div>
          </div>
          </div>
        </div>
      </article>
      <article class="mt-3 mb-5 pb-5" id="tooltips">
        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <h3>Tooltips</h3>
          <a class="d-flex align-items-center" href="/docs/5.1/components/tooltips/">Documentation</a>
        </div>

        <div>
          <div class="bd-example tooltip-demo">
          <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">Tooltip on top</button>
          <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on end">Tooltip on end</button>
          <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
          <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on start">Tooltip on start</button>
          <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML</button>
          </div>
        </div>
      </article>
    </section>
  </div>

  <div class="modal fade" id="exampleModalDefault" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLiveLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>I will not close if you click outside me. Don't even try to press escape key.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollableTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenteredScrollableTitle">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
          <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          <p>This content should appear at the bottom after you scroll.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title h4" id="exampleModalFullscreenLabel">Full screen modal</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <script src="cheatsheet.js"></script>
    </body>
  </html>
  `
}, {
  name: 'Checkout',
  content: `
  <!doctype html>
  <html lang="en">
    <head>
      <base href="https://getbootstrap.com/docs/5.1/examples/checkout/">
      ${head}
    </head>
    <body class="bg-light">

<div class="container-sm">
  <main>
    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
      <h2>Checkout form</h2>
      <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
    </div>

    <div class="row g-5">
      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Your cart</span>
          <span class="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Product name</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">$12</span>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Second product</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">$8</span>
          </li>
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">Third item</h6>
              <small class="text-muted">Brief description</small>
            </div>
            <span class="text-muted">$5</span>
          </li>
          <li class="list-group-item d-flex justify-content-between bg-light">
            <div class="text-success">
              <h6 class="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span class="text-success">−$5</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>$20</strong>
          </li>
        </ul>

        <form class="card p-2">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Promo code">
            <button type="submit" class="btn btn-secondary">Redeem</button>
          </div>
        </form>
      </div>
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Billing address</h4>
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">Username</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" id="username" placeholder="Username" required>
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-12">
              <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
            </div>

            <div class="col-md-5">
              <label for="country" class="form-label">Country</label>
              <select class="form-select" id="country" required>
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div class="col-md-4">
              <label for="state" class="form-label">State</label>
              <select class="form-select" id="state" required>
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div class="col-md-3">
              <label for="zip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required>
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr class="my-4">

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address">
            <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info">
            <label class="form-check-label" for="save-info">Save this information for next time</label>
          </div>

          <hr class="my-4">

          <h4 class="mb-3">Payment</h4>

          <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required>
              <label class="form-check-label" for="credit">Credit card</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required>
              <label class="form-check-label" for="debit">Debit card</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required>
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required>
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr class="my-4">

          <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </form>
      </div>
    </div>
  </main>

  <footer class="my-5 pt-5 text-muted text-center text-small">
    <p class="mb-1">&copy; 2017–2021 Company Name</p>
    <ul class="list-inline">
      <li class="list-inline-item"><a href="#">Privacy</a></li>
      <li class="list-inline-item"><a href="#">Terms</a></li>
      <li class="list-inline-item"><a href="#">Support</a></li>
    </ul>
  </footer>
</div>
  </body>
  </html>
  `
}, {
  name: 'Cover',
  content: `
  <!doctype html>
  <html lang="en">
    <head>
      <base href="https://getbootstrap.com/docs/5.1/examples/cover/">
      ${head}
      <link href="cover.css" rel="stylesheet">
    </head>
    <body class="d-flex h-100 text-center text-white bg-dark">

    <div class="cover-container d-flex w-100 min-vh-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0">Cover</h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </header>

      <main class="px-3">
        <h1>Cover your page.</h1>
        <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
        </p>
      </main>

      <footer class="mt-auto text-white-50">
        <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
      </footer>
    </div>

  </body>
  </html>
  `
}, {
  name: 'Dashboard',
  content: `
  <!doctype html>
  <html lang="en">
    <head>
      <base href="https://getbootstrap.com/docs/5.1/examples/dashboard/">
      ${head}
      <!-- Custom styles for this template -->
      <link href="dashboard.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
    </head>
    <body class="bg-light">

    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <a class="nav-link px-3" href="#">Sign out</a>
      </div>
    </div>
  </header>

  <div class="container-fluid">
    <div class="row">
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <span data-feather="home"></span>
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file"></span>
                Orders
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="shopping-cart"></span>
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="users"></span>
                Customers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="bar-chart-2"></span>
                Reports
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="layers"></span>
                Integrations
              </a>
            </li>
          </ul>

          <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            <a class="link-secondary" href="#" aria-label="Add a new report">
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
          <ul class="nav flex-column mb-2">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Current month
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Last quarter
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Social engagement
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                Year-end sale
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Dashboard</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
              <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
              <span data-feather="calendar"></span>
              This week
            </button>
          </div>
        </div>

        <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>

        <h2>Section title</h2>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
                <th scope="col">Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
                <td>text</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
                <td>layout</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>data</td>
                <td>rich</td>
                <td>dashboard</td>
                <td>tabular</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>information</td>
                <td>placeholder</td>
                <td>illustrative</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,004</td>
                <td>text</td>
                <td>random</td>
                <td>layout</td>
                <td>dashboard</td>
              </tr>
              <tr>
                <td>1,005</td>
                <td>dashboard</td>
                <td>irrelevant</td>
                <td>text</td>
                <td>placeholder</td>
              </tr>
              <tr>
                <td>1,006</td>
                <td>dashboard</td>
                <td>illustrative</td>
                <td>rich</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,007</td>
                <td>placeholder</td>
                <td>tabular</td>
                <td>information</td>
                <td>irrelevant</td>
              </tr>
              <tr>
                <td>1,008</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
                <td>text</td>
              </tr>
              <tr>
                <td>1,009</td>
                <td>placeholder</td>
                <td>irrelevant</td>
                <td>visual</td>
                <td>layout</td>
              </tr>
              <tr>
                <td>1,010</td>
                <td>data</td>
                <td>rich</td>
                <td>dashboard</td>
                <td>tabular</td>
              </tr>
              <tr>
                <td>1,011</td>
                <td>information</td>
                <td>placeholder</td>
                <td>illustrative</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,012</td>
                <td>text</td>
                <td>placeholder</td>
                <td>layout</td>
                <td>dashboard</td>
              </tr>
              <tr>
                <td>1,013</td>
                <td>dashboard</td>
                <td>irrelevant</td>
                <td>text</td>
                <td>visual</td>
              </tr>
              <tr>
                <td>1,014</td>
                <td>dashboard</td>
                <td>illustrative</td>
                <td>rich</td>
                <td>data</td>
              </tr>
              <tr>
                <td>1,015</td>
                <td>random</td>
                <td>tabular</td>
                <td>information</td>
                <td>text</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
  <script src="dashboard.js"></script>
    </body>
  </html>
  `
}, {
  name: 'Masonry',
  content: `<!DOCTYPE html><html><head>${head}
  <script async src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" ></script>
  </head><body>

  <main class="container py-5">
    <h1>Bootstrap and Masonry</h1>
    <p class="lead">Integrate <a href="https://masonry.desandro.com/">Masonry</a> with the Bootstrap grid system and cards component.</p>

    <p>Masonry is a third party script not included in Bootstrap. This script is added to bring the power of Masonry to our Bootstrap:</p>

    <pre><code>
&lt;script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous" async&gt;&lt;/script&gt;
  </code></pre>

    <p>By adding <code>data-masonry='{"percentPosition": true }'</code> to the <code>.row</code> wrapper, we can combine the powers of Bootstrap's responsive grid and Masonry's positioning. However during editing it won't update, so you need to remove the attribute first and then put it back (then reload page) after you've done editing.</p>

    <hr class="my-5">

    <div class="row" data-masonry="{&quot;percentPosition&quot;: true }" style="position: relative; height: 1066px;">
      <div class="col-sm-6 col-lg-4 mb-4" style="position: absolute; left: 0%; top: 0px;">
        <div class="card">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
          </svg>

          <div class="card-body">
            <h5 class="card-title">Card title that wraps to a new line</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-4 mb-4" style="position: absolute; left: 50%; top: 0px;">
        <div class="card p-3">
          <figure class="p-3 mb-0">
            <blockquote class="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer mb-0 text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="col-sm-6 col-lg-4 mb-4" style="position: absolute; left: 50%; top: 199.6px;">
        <div class="card">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
          </svg>

          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-4 mb-4" style="position: absolute; left: 0%; top: 386px;">
        <div class="card bg-primary text-white text-center p-3">
          <figure class="mb-0">
            <blockquote class="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer mb-0 text-white">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="col-sm-6 col-lg-4 mb-4" style="position: absolute; left: 0%; top: 524px;">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has a regular title and short paragraph of text below it.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 col-lg-4 mb-4" style="position: absolute; left: 50%; top: 577.6px;">
        <div class="card">
          <svg class="bd-placeholder-img card-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text>
          </svg>

        </div>
      </div>
      <div class="col-sm-6 col-lg-4 mb-4" style="position: absolute; left: 0%; top: 702px;">
        <div class="card p-3 text-end">
          <figure class="mb-0">
            <blockquote class="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer mb-0 text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="col-sm-6 col-lg-4 mb-4" style="position: absolute; left: 0%; top: 840px;">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>

  </main>

</body></html>`
}, {
  name: 'Pricing',
  content: `<!DOCTYPE html><html><head>
  <base href="https://getbootstrap.com/docs/5.1/examples/pricing/">
  ${head}
  <!-- Custom styles for this template -->
  <link href="pricing.css" rel="stylesheet">
 </head><body>

 <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
 <symbol id="check" viewBox="0 0 16 16">
   <title>Check</title>
   <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
 </symbol>
</svg>

<div class="container py-3">
 <header>
   <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
     <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
       <span class="fs-4">Pricing example</span>
     </a>

     <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
       <a class="me-3 py-2 text-dark text-decoration-none" href="#">Features</a>
       <a class="me-3 py-2 text-dark text-decoration-none" href="#">Enterprise</a>
       <a class="me-3 py-2 text-dark text-decoration-none" href="#">Support</a>
       <a class="py-2 text-dark text-decoration-none" href="#">Pricing</a>
     </nav>
   </div>

   <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
     <h1 class="display-4 fw-normal">Pricing</h1>
     <p class="fs-5 text-muted">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
   </div>
 </header>

 <main>
   <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
     <div class="col">
       <div class="card mb-4 rounded-3 shadow-sm">
         <div class="card-header py-3">
           <h4 class="my-0 fw-normal">Free</h4>
         </div>
         <div class="card-body">
           <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
           <ul class="list-unstyled mt-3 mb-4">
             <li>10 users included</li>
             <li>2 GB of storage</li>
             <li>Email support</li>
             <li>Help center access</li>
           </ul>
           <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
         </div>
       </div>
     </div>
     <div class="col">
       <div class="card mb-4 rounded-3 shadow-sm">
         <div class="card-header py-3">
           <h4 class="my-0 fw-normal">Pro</h4>
         </div>
         <div class="card-body">
           <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h1>
           <ul class="list-unstyled mt-3 mb-4">
             <li>20 users included</li>
             <li>10 GB of storage</li>
             <li>Priority email support</li>
             <li>Help center access</li>
           </ul>
           <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
         </div>
       </div>
     </div>
     <div class="col">
       <div class="card mb-4 rounded-3 shadow-sm border-primary">
         <div class="card-header py-3 text-white bg-primary border-primary">
           <h4 class="my-0 fw-normal">Enterprise</h4>
         </div>
         <div class="card-body">
           <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
           <ul class="list-unstyled mt-3 mb-4">
             <li>30 users included</li>
             <li>15 GB of storage</li>
             <li>Phone and email support</li>
             <li>Help center access</li>
           </ul>
           <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
         </div>
       </div>
     </div>
   </div>

   <h2 class="display-6 text-center mb-4">Compare plans</h2>

   <div class="table-responsive">
     <table class="table text-center">
       <thead>
         <tr>
           <th style="width: 34%;"></th>
           <th style="width: 22%;">Free</th>
           <th style="width: 22%;">Pro</th>
           <th style="width: 22%;">Enterprise</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <th scope="row" class="text-start">Public</th>
           <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
           <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
           <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
         </tr>
         <tr>
           <th scope="row" class="text-start">Private</th>
           <td></td>
           <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
           <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
         </tr>
       </tbody>

       <tbody>
         <tr>
           <th scope="row" class="text-start">Permissions</th>
           <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
           <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
           <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
         </tr>
         <tr>
           <th scope="row" class="text-start">Sharing</th>
           <td></td>
           <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
           <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
         </tr>
         <tr>
           <th scope="row" class="text-start">Unlimited members</th>
           <td></td>
           <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
           <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
         </tr>
         <tr>
           <th scope="row" class="text-start">Extra security</th>
           <td></td>
           <td></td>
           <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
         </tr>
       </tbody>
     </table>
   </div>
 </main>

 <footer class="pt-4 my-md-5 pt-md-5 border-top">
   <div class="row">
     <div class="col-12 col-md">
       <img class="mb-2" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="24" height="19">
       <small class="d-block mb-3 text-muted">&copy; 2017–2021</small>
     </div>
     <div class="col-6 col-md">
       <h5>Features</h5>
       <ul class="list-unstyled text-small">
         <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
         <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Random feature</a></li>
         <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team feature</a></li>
         <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
         <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Another one</a></li>
         <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Last time</a></li>
       </ul>
     </div>
     <div class="col-6 col-md">
       <h5>Resources</h5>
       <ul class="list-unstyled text-small">
         <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource</a></li>
         <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Resource name</a></li>
         <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Another resource</a></li>
         <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Final resource</a></li>
       </ul>
     </div>
     <div class="col-6 col-md">
       <h5>About</h5>
       <ul class="list-unstyled text-small">
         <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Team</a></li>
         <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Locations</a></li>
         <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Privacy</a></li>
         <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Terms</a></li>
       </ul>
     </div>
   </div>
 </footer>
</div>
</body></html>`
},   {
  name: 'Product',
  content: `<!DOCTYPE html><html><head>
  <base href="https://getbootstrap.com/docs/5.1/examples/product/">
  ${head}
  <!-- Custom styles for this template -->
  <link href="product.css" rel="stylesheet">
 </head><body>

 <header class="site-header sticky-top py-1">
 <nav class="container d-flex flex-column flex-md-row justify-content-between">
   <a class="py-2" href="#" aria-label="Product">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
   </a>
   <a class="py-2 d-none d-md-inline-block" href="#">Tour</a>
   <a class="py-2 d-none d-md-inline-block" href="#">Product</a>
   <a class="py-2 d-none d-md-inline-block" href="#">Features</a>
   <a class="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
   <a class="py-2 d-none d-md-inline-block" href="#">Support</a>
   <a class="py-2 d-none d-md-inline-block" href="#">Pricing</a>
   <a class="py-2 d-none d-md-inline-block" href="#">Cart</a>
 </nav>
</header>

<main>
 <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
   <div class="col-md-5 p-lg-5 mx-auto my-5">
     <h1 class="display-4 fw-normal">Punny headline</h1>
     <p class="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
     <a class="btn btn-outline-secondary" href="#">Coming soon</a>
   </div>
   <div class="product-device shadow-sm d-none d-md-block"></div>
   <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
 </div>

 <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
   <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
     <div class="my-3 py-3">
       <h2 class="display-5">Another headline</h2>
       <p class="lead">And an even wittier subheading.</p>
     </div>
     <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
   </div>
   <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
     <div class="my-3 p-3">
       <h2 class="display-5">Another headline</h2>
       <p class="lead">And an even wittier subheading.</p>
     </div>
     <div class="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
   </div>
 </div>

 <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
   <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
     <div class="my-3 p-3">
       <h2 class="display-5">Another headline</h2>
       <p class="lead">And an even wittier subheading.</p>
     </div>
     <div class="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
   </div>
   <div class="bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
     <div class="my-3 py-3">
       <h2 class="display-5">Another headline</h2>
       <p class="lead">And an even wittier subheading.</p>
     </div>
     <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
   </div>
 </div>

 <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
   <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
     <div class="my-3 p-3">
       <h2 class="display-5">Another headline</h2>
       <p class="lead">And an even wittier subheading.</p>
     </div>
     <div class="bg-body shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
   </div>
   <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
     <div class="my-3 py-3">
       <h2 class="display-5">Another headline</h2>
       <p class="lead">And an even wittier subheading.</p>
     </div>
     <div class="bg-body shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
   </div>
 </div>

 <div class="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
   <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
     <div class="my-3 p-3">
       <h2 class="display-5">Another headline</h2>
       <p class="lead">And an even wittier subheading.</p>
     </div>
     <div class="bg-body shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
   </div>
   <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
     <div class="my-3 py-3">
       <h2 class="display-5">Another headline</h2>
       <p class="lead">And an even wittier subheading.</p>
     </div>
     <div class="bg-body shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
   </div>
 </div>
</main>

<footer class="container py-5">
 <div class="row">
   <div class="col-12 col-md">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
     <small class="d-block mb-3 text-muted">&copy; 2017–2021</small>
   </div>
   <div class="col-6 col-md">
     <h5>Features</h5>
     <ul class="list-unstyled text-small">
       <li><a class="link-secondary" href="#">Cool stuff</a></li>
       <li><a class="link-secondary" href="#">Random feature</a></li>
       <li><a class="link-secondary" href="#">Team feature</a></li>
       <li><a class="link-secondary" href="#">Stuff for developers</a></li>
       <li><a class="link-secondary" href="#">Another one</a></li>
       <li><a class="link-secondary" href="#">Last time</a></li>
     </ul>
   </div>
   <div class="col-6 col-md">
     <h5>Resources</h5>
     <ul class="list-unstyled text-small">
       <li><a class="link-secondary" href="#">Resource name</a></li>
       <li><a class="link-secondary" href="#">Resource</a></li>
       <li><a class="link-secondary" href="#">Another resource</a></li>
       <li><a class="link-secondary" href="#">Final resource</a></li>
     </ul>
   </div>
   <div class="col-6 col-md">
     <h5>Resources</h5>
     <ul class="list-unstyled text-small">
       <li><a class="link-secondary" href="#">Business</a></li>
       <li><a class="link-secondary" href="#">Education</a></li>
       <li><a class="link-secondary" href="#">Government</a></li>
       <li><a class="link-secondary" href="#">Gaming</a></li>
     </ul>
   </div>
   <div class="col-6 col-md">
     <h5>About</h5>
     <ul class="list-unstyled text-small">
       <li><a class="link-secondary" href="#">Team</a></li>
       <li><a class="link-secondary" href="#">Locations</a></li>
       <li><a class="link-secondary" href="#">Privacy</a></li>
       <li><a class="link-secondary" href="#">Terms</a></li>
     </ul>
   </div>
 </div>
</footer>
</body></html>`
}, {
  name: 'Sign-in',
  content: `<!DOCTYPE html><html><head>
  <base href="https://getbootstrap.com/docs/5.1/examples/sign-in/">
  ${head}
  <!-- Custom styles for this template -->
  <link href="signin.css" rel="stylesheet">
 </head><body class="text-center">

 <main class="form-signin">
 <form>
   <img class="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
   <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

   <div class="form-floating">
     <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
     <label for="floatingInput">Email address</label>
   </div>
   <div class="form-floating">
     <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
     <label for="floatingPassword">Password</label>
   </div>

   <div class="checkbox mb-3">
     <label>
       <input type="checkbox" value="remember-me"> Remember me
     </label>
   </div>
   <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
   <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
 </form>
</main>


</body></html>`
}];