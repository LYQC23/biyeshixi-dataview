package com.wzh.dataview.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
/**
 * @author SolaQuick
 * @date 2022/8/24
 */
@RestController
public class DataViewController {

    @RequestMapping("/taskdemo")
    public ModelAndView itemsList() {
        ModelAndView mav = new ModelAndView("/views/HelloWorld.html");
        return mav;
    }


}