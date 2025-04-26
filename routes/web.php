<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\GuestMiddleware;


/*
|--------------------------------------------------------------------------
| This controller handles the homepage and other public-facing pages that don't require authentication
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/about/team', [HomeController::class, 'team'])->name('about.team');
Route::get('/about/blog', [HomeController::class, 'blog'])->name('about.blog');
Route::get('/about/blog/{id}', function ($id) {
    return Inertia::render('About/BlogPost', [
        'id' => $id
    ]);
})->name('about.blog.post');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::get('/locations/evans', [HomeController::class, 'evansLocation'])->name('locations.evans');
Route::get('/locations/grovetown', [HomeController::class, 'grovetownLocation'])->name('locations.grovetown');

// Programs routes
Route::get('/programs', [HomeController::class, 'programs'])->name('programs');
Route::get('/programs/lil-dragons', [HomeController::class, 'lilDragons'])->name('programs.lil-dragons');
Route::get('/programs/kids-karate', [HomeController::class, 'kidsKarate'])->name('programs.kids-karate');
Route::get('/programs/teens-karate', [HomeController::class, 'teensKarate'])->name('programs.teens-karate');
Route::get('/programs/adult-kempo', [HomeController::class, 'adultKempo'])->name('programs.adult-kempo');
Route::get('/programs/kickboxing', [HomeController::class, 'kickboxing'])->name('programs.kickboxing');
Route::get('/programs/jiu-jitsu', [HomeController::class, 'jiuJitsu'])->name('programs.jiu-jitsu');

// Other main menu routes
Route::get('/success-stories', [HomeController::class, 'successStories'])->name('success-stories');
Route::get('/success-stories/written-reviews', [HomeController::class, 'writtenReviews'])->name('success-stories.written-reviews');
Route::get('/success-stories/video-testimonials', [HomeController::class, 'videoTestimonials'])->name('success-stories.video-testimonials');
Route::get('/franchise', [HomeController::class, 'franchise'])->name('franchise');

/*
|--------------------------------------------------------------------------
| This controller handles Login Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Auth\LoginController;

Route::get('login', [LoginController::class, 'index'])->middleware(GuestMiddleware::class)->name('auth.login');
Route::post('login', [LoginController::class, 'store'])->name('auth.login.store');
Route::get('logout', [LoginController::class, 'destroy'])->name('auth.logout');

/*
|--------------------------------------------------------------------------
| This controller handles Google Auth Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Auth\SocialAuthController;

Route::get('/auth/google', [SocialAuthController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('/auth/google/callback', [SocialAuthController::class, 'handleGoogleCallback'])->name('auth.google.callback');

/*
|--------------------------------------------------------------------------
| This controller handles Register Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Auth\RegisterController;


Route::get('register', [RegisterController::class, 'index'])->middleware(GuestMiddleware::class)->name('auth.register');

/*
|--------------------------------------------------------------------------
| This controller handles All Admin Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Middleware\AdminMiddleware;

Route::middleware([AdminMiddleware::class])->group(function () {

  // Dashboard
  Route::get('admin/dashboard', [DashboardController::class, 'index'])->name('admin.dashboard');

  // Settings
  Route::get('admin/settings', [SettingsController::class, 'index'])->name('admin.settings');
  Route::put('admin/settings/profile', [SettingsController::class, 'updateProfile'])->name('admin.settings.updateProfile');
  Route::put('admin/settings/password', [SettingsController::class, 'updatePassword'])->name('admin.settings.updatePassword');
});

/*
|--------------------------------------------------------------------------
| This controller handles All User Logic
|--------------------------------------------------------------------------
*/

use App\Http\Controllers\User\UserDashboardController;
use App\Http\Controllers\User\UserSettingsController;
use App\Http\Middleware\UserMiddleware;

Route::middleware([UserMiddleware::class])->group(function () {

  // Dashboard
  Route::get('dashboard', [UserDashboardController::class, 'index'])->name('user.dashboard');

  // Settings
  Route::get('user/settings', [UserSettingsController::class, 'index'])->name('user.settings');
  Route::put('user/settings/profile', [UserSettingsController::class, 'updateProfile'])->name('user.settings.updateProfile');
  Route::put('user/settings/password', [UserSettingsController::class, 'updatePassword'])->name('user.settings.updatePassword');
});

// Team Member biography route
Route::get('/about/team/{slug}', function ($slug) {
    $teamMembers = [
        'tommy-seigler' => [
            'name' => 'Mr. Tommy Seigler',
            'position' => 'Founder/Owner',
            'imageUrl' => '/Images/team/Tommy.jpg',
            'slug' => 'tommy-seigler',
            'certifications' => [
                '10th Degree Black Belt in Tetsushin Budo',
                'Black Belts in multiple disciplines including Karate, Kickboxing, MMA, Brazilian Jiu-Jitsu, Hapkido, Japanese Jiu-Jitsu and more'
            ],
            'longBio' => "Professor Tommy Seigler is the founder and owner of Seigler's Karate Center in Augusta, GA. His illustrious career as a professional instructor, competitor, visionary, and most important, student of the arts has spanned 50+ years.

Mr. Seigler started training in martial arts at the young age of 14 after being bullied in school. Although martial arts wasn't popular at the time, Mr. Seigler made it his mission to learn the art of Kempo Karate under Professor Albert Church out of Charleston, SC in 1970.

He knew that martial arts would forever be a part of his life and he has made it his mission to learn as much as possible and then help change others lives with what he learned. In 1982 he opened his first martial arts school in the Augusta, GA area.

Now, after over 30+ years of hard work Mr. Seigler owns one of the most successful martial arts schools in the nation. He is a 10th Degree Black Belt in Tetsushin Budo and has Black Belts in multiple disciplines of martial arts including Karate, Kickboxing, MMA, Brazilian Jiu-Jitsu, Hapkido, Japanese Jiu-Jitsu and more.

He believes in leading his team on a mission to change lives through martial arts and to build leaders in our community."
        ],
        'jennifer-seigler-waters' => [
            'name' => 'Mrs. Jennifer Seigler Waters',
            'position' => 'Executive Sensei',
            'imageUrl' => '/Images/team/Jennifer.jpg',
            'slug' => 'jennifer-seigler-waters',
            'certifications' => [
                '6th Degree Kempo Karate Black Belt',
                'Purple Belt in Tetsu Shin Ryu Jiu-Jitsu'
            ],
            'longBio' => "Jennifer Waters is the Executive Sensei of Seigler's Karate Center, the daughter of Tommy Seigler and wife to Head Sensei, Titus Waters.

Mrs. Jennifer, as her students call her, has grown up in the martial arts world, starting her training at the early age of 3! Now, Mrs. Jennifer leads her team of instructors and staff at SKC to help change lives on a daily basis!

Additionally, she is an avid athlete and has earned a 6th Degree Kempo Karate Black Belt and is a Purple Belt in Tetsu Shin Ryu Jiu-Jitsu.

She also is the IKF US Amateur Kickboxing Champion and is now a professional kickboxer and MMA fighter. Although she is a well established martial artist, her passion lies in helping others succeed at changing their life through martial arts."
        ],
        'lisa-corley' => [
            'name' => 'Mrs. Lisa Corley',
            'position' => 'Chief of Operations',
            'imageUrl' => '/Images/team/Lisa.jpg',
            'slug' => 'lisa-corley',
            'longBio' => "Lisa Corley is from Evans, Georgia. When her son enrolled as a Lil Dragon at SKC, she was so impressed by the positive and family-friendly atmosphere that she wanted to experience learning martial arts herself! The training buddies and friends she made in her classes soon had her falling in love with SKC too.

She started working at SKC in 2013 and is now the Chief Operating Officer. Mrs. Corley firmly believes that joining SKC is the best decision you will make – it has certainly been life-changing for her!"
        ],
        'titus-waters' => [
            'name' => 'Mr. Titus Waters',
            'position' => 'Head Sensei',
            'imageUrl' => '/Images/team/Titus.jpg',
            'slug' => 'titus-waters',
            'certifications' => [
                '5th degree Black Belt in Kempo',
                'Brown Belt in Tetsu Shin Ryu Jiu-Jitsu'
            ],
            'longBio' => "Titus Waters started practicing martial arts at the ripe age of 18 and has been in the game ever since. He fell in love with SKC right away–the first experience that made him love it was seeing how the Instructors cared for students. He is a 5th degree Black Belt in Kempo, a Brown Belt in Tetsu Shin Ryu Jiu-Jitsu, and a Head Instructor, so he knows what he's talking about!

He met Jennifer Waters (Mr. Seigler's daughter)and they got married soon after. Mr. Waters started working at SKC in 2007, and he believes that you should start martial arts now, no matter your age or experience. It's never too late to learn something new!"
        ],
        'daniel-corley' => [
            'name' => 'Mr. Daniel Corley',
            'position' => 'Senior Sensei',
            'imageUrl' => '/Images/team/Daniel.jpg',
            'slug' => 'daniel-corley',
            'certifications' => [
                '4th Degree Black Belt in Kempo',
                'Brown Belt in Tetsu Shin Ryu Jiu-Jitsu'
            ],
            'longBio' => "When Daniel Corley was referred to join SKC as a kindergartner, he had no idea the discipline and better life he was about to embark on. Now a 4th Degree Black Belt in Kempo and a Brown Belt in Tetsu Shin Ryu Jiu-Jitsu, Mr. Daniel has been with SKC since 2016 and is currently a Senior Instructor. He firmly believes that joining SKC will be the best decision you make in your life. With Mr. Daniel's help, you'll become stronger physically and mentally – just like him!"
        ],
        'cameron-corley' => [
            'name' => 'Ms. Cameron Corley',
            'position' => 'Senior Success Coach',
            'imageUrl' => '/Images/team/Cameron.jpg',
            'slug' => 'cameron-corley',
            'longBio' => "Cameron Corley is originally from Evans GA, but found her home at SKC in 2015. After seeing her brother and mom start training, she soon began working at the front desk and quickly rose through the ranks.

She is now our Senior Success Coach and believes that SKC is the best way for you to achieve your goals with a support system that feels like family. When she's not helping people achieve their fitness goals, Cameron enjoys reading, and spending time with her cats and dogs."
        ]
    ];

    if (!isset($teamMembers[$slug])) {
        abort(404);
    }

    return inertia('About/TeamMember', [
        'teamMember' => $teamMembers[$slug]
    ]);
});
