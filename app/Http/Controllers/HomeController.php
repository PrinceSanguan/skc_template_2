<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the homepage.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Welcome');
    }

    /**
     * Display the about page.
     *
     * @return \Inertia\Response
     */
    public function about()
    {
        return Inertia::render('About/Index');
    }

    /**
     * Display the team page.
     *
     * @return \Inertia\Response
     */
    public function team()
    {
        return Inertia::render('About/Team');
    }

    /**
     * Display the blog page.
     *
     * @return \Inertia\Response
     */
    public function blog()
    {
        return Inertia::render('About/Blog');
    }

    /**
     * Display the contact page.
     *
     * @return \Inertia\Response
     */
    public function contact()
    {
        return Inertia::render('About/Contact');
    }

    /**
     * Display the Evans location page.
     *
     * @return \Inertia\Response
     */
    public function evansLocation()
    {
        return Inertia::render('Locations/Evans');
    }

    /**
     * Display the Grovetown location page.
     *
     * @return \Inertia\Response
     */
    public function grovetownLocation()
    {
        return Inertia::render('Locations/Grovetown');
    }

    /**
     * Display the main programs page.
     *
     * @return \Inertia\Response
     */
    public function programs()
    {
        return Inertia::render('Programs/Index');
    }

    /**
     * Display the Lil Dragons program page.
     *
     * @return \Inertia\Response
     */
    public function lilDragons()
    {
        return Inertia::render('Programs/LilDragons');
    }

    /**
     * Display the Kids Karate program page.
     *
     * @return \Inertia\Response
     */
    public function kidsKarate()
    {
        return Inertia::render('Programs/KidsKarate');
    }

    /**
     * Display the Teens Karate program page.
     *
     * @return \Inertia\Response
     */
    public function teensKarate()
    {
        return Inertia::render('Programs/TeensKarate');
    }

    /**
     * Display the Adult Kempo Karate program page.
     *
     * @return \Inertia\Response
     */
    public function adultKempo()
    {
        return Inertia::render('Programs/AdultKempo');
    }

    /**
     * Display the Kickboxing program page.
     *
     * @return \Inertia\Response
     */
    public function kickboxing()
    {
        return Inertia::render('Programs/Kickboxing');
    }

    /**
     * Display the Jiu Jitsu program page.
     *
     * @return \Inertia\Response
     */
    public function jiuJitsu()
    {
        return Inertia::render('Programs/JiuJitsu');
    }

    /**
     * Display the success stories page.
     *
     * @return \Inertia\Response
     */
    public function successStories()
    {
        return Inertia::render('SuccessStories');
    }

    /**
     * Display the written reviews page.
     *
     * @return \Inertia\Response
     */
    public function writtenReviews()
    {
        return Inertia::render('SuccessStories/WrittenReviews');
    }

    /**
     * Display the video testimonials page.
     *
     * @return \Inertia\Response
     */
    public function videoTestimonials()
    {
        return Inertia::render('SuccessStories/VideoTestimonials');
    }

    /**
     * Display the franchise info page.
     *
     * @return \Inertia\Response
     */
    public function franchise()
    {
        return Inertia::render('Franchise');
    }
}
